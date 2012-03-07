/**
 * Provides the javascript for the compose.php script (standard view).
 *
 * See the enclosed file COPYING for license information (GPL). If you
 * did not receive this file, see http://www.horde.org/licenses/gpl.
 */

var ImpCompose = {
    // Variables defined in compose.php:
    //   cancel_url, cursor_pos, editor_wait, last_msg, max_attachments,
    //   popup, redirect, reloaded, sc_submit, sm_check, skip_spellcheck,
    //   spellcheck
    display_unload_warning: true,

    confirmCancel: function(e)
    {
        e.stop();

        if (window.confirm(IMP.text.compose_cancel)) {
            this.display_unload_warning = false;
            if (this.popup) {
                if (this.cancel_url) {
                    self.location = this.cancel_url;
                } else {
                    self.close();
                }
            } else {
                window.location = this.cancel_url;
            }
        }
    },

    changeIdentity: function(elt)
    {
        var id = $F(elt),
            last = ImpComposeBase.identities[$F('last_identity')],
            next = ImpComposeBase.identities[id],
            bcc = $('bcc'),
            save = $('ssm'),
            sm = $('sent_mail'),
            re;

        if (this.sm_check) {
            sm.setValue(next.sm_name);
        } else {
            sm.update(next.sm_display);
        }

        if (save) {
            save.setValue(next.sm_save);
        }
        if (bcc) {
            bccval = $F(bcc);

            if (last.bcc) {
                re = new RegExp(last.bcc + ",? ?", 'gi');
                bccval = bccval.replace(re, "");
                if (bccval) {
                    bccval = bccval.replace(/, ?$/, "");
                }
            }

            if (next.bcc) {
                if (bccval) {
                    bccval += ', ';
                }
                bccval += next.bcc;
            }

            bcc.setValue(bccval);
        }
    },

    uniqSubmit: function(actionID, e)
    {
        var cur_msg, form;

        if (!Object.isUndefined(e)) {
            e.stop();
        }

        switch (actionID) {
        case 'redirect':
            if ($F('to') == '') {
                alert(IMP.text.compose_recipient);
                $('to').focus();
                return;
            }

            form = $('redirect');
            break;

        case 'send_message':
            if (!this.skip_spellcheck &&
                this.spellcheck &&
                IMP.SpellChecker &&
                !IMP.SpellChecker.isActive()) {
                this.sc_submit = { a: actionID, e: e };
                IMP.SpellChecker.spellCheck();
                return;
            }

            if (($F('subject') == '') &&
                !window.confirm(IMP.text.compose_nosubject)) {
                return;
            }

            this.skip_spellcheck = false;

            if (IMP.SpellChecker) {
                IMP.SpellChecker.resume();
            }

            // fall through

        case 'add_attachment':
        case 'save_draft':
        case 'save_template':
            form = $('compose');
            $('actionID').setValue(actionID);
            break;

        case 'auto_save_draft':
            // Move HTML text to textarea field for submission.
            if (ImpComposeBase.editor_on &&
                CKEDITOR.instances.composeMessage) {
                CKEDITOR.instances.composeMessage.updateElement();
            }

            cur_msg = MD5.hash($('to', 'cc', 'bcc', 'subject').compact().invoke('getValue').join('\0') + $F('composeMessage'));
            if (this.last_msg && curr_hash != this.last_msg) {
                // Use an AJAX submit here so that the page doesn't reload.
                $('actionID').setValue(actionID);
                HordeCore.submitForm('compose', {
                    callback: this._autoSaveDraftCallback.bind(this)
                });
            }
            this.last_msg = cur_msg;
            return;

        case 'toggle_editor':
            form = $('compose');
            break;

        default:
            return;
        }

        if (this.editor_wait && ImpComposeBase.editor_on) {
            return this.uniqSubmit.bind(this, actionID, e).defer();
        }

        // Ticket #6727; this breaks on WebKit w/FCKeditor.
        if (!Prototype.Browser.WebKit) {
            form.setStyle({ cursor: 'wait' });
        }

        this.display_unload_warning = false;
        form.submit();
    },

    _autoSaveDraftCallback: function(r)
    {
        $('compose_formToken').setValue(r.formToken);
        $('compose_requestToken').setValue(r.requestToken);
    },

    attachmentChanged: function()
    {
        var fields = [],
            usedFields = 0,
            input, lastRow, newRow, td;

        $('upload_atc').select('input[type="file"]').each(function(i) {
            fields[fields.length] = i;
        });

        if (this.max_attachments !== null &&
            fields.length == this.max_attachments) {
            return;
        }

        fields.each(function(i) {
            if (i.value.length > 0) {
                usedFields++;
            }
        });

        if (usedFields == fields.length) {
            lastRow = $('attachment_row_' + usedFields);
            if (lastRow) {
                td = new Element('TD', { align: 'left' }).insert(new Element('STRONG').insert(IMP.text.compose_file + ' ' + (usedFields + 1) + ':')).insert('&nbsp;')

                input = new Element('INPUT', { type: 'file', id: 'upload_' + (usedFields + 1), name: 'upload_' + (usedFields + 1), size: 25 });
                if (Prototype.Browser.IE) {
                    input.observe('change', this.changeHandler.bindAsEventListener(this));
                }
                td.insert(input);

                newRow = new Element('TR', { id: 'attachment_row_' + (usedFields + 1) }).insert(td);

                lastRow.parentNode.insertBefore(newRow, lastRow.nextSibling);
            }
        }
    },

    clickHandler: function(e)
    {
        if (e.isRightClick()) {
            return;
        }

        var elt = e.element(), name;

        while (Object.isElement(elt)) {
            if (elt.readAttribute('id') == 'redirect_abook') {
                window.open(this.redirect_contacts, "contacts", "toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes,width=550,height=300,left=100,top=100");
                return;
            } else if (elt.hasClassName('button')) {
                name = elt.readAttribute('name');
                switch (name) {
                case 'btn_add_attachment':
                case 'btn_redirect':
                case 'btn_replyall_revert':
                case 'btn_replylist_revert':
                case 'btn_save_draft':
                case 'btn_save_template':
                case 'btn_send_message':
                    this.uniqSubmit(name.substring(4), e);
                    break;

                case 'btn_cancel_compose':
                    this.confirmCancel(e);
                    break;
                }
            }

            elt = elt.up();
        }
    },

    changeHandler: function(e)
    {
        var elt = e.element(),
            id = elt.identify();

        switch (id) {
        case 'identity':
            this.changeIdentity(elt);
            break;

        case 'sent_mail':
            $('ssm').writeAttribute('checked', 'checked');
            break;

        default:
            if (id.substring(0, 7) == 'upload_') {
                this.attachmentChanged();
            }
            break;
        }
    },

    keyDownHandler: function(e)
    {
        if (e.keyCode == 10 || e.keyCode == Event.KEY_RETURN) {
            e.stop();
        }
    },

    onDomLoad: function()
    {
        var handler;

        if (this.redirect) {
            $('to').focus();
        } else {
            handler = this.keyDownHandler.bindAsEventListener(this);
            /* Prevent Return from sending messages - it should bring us out
             * of autocomplete, not submit the whole form. */
            $('compose').select('INPUT').each(function(i) {
                /* Attach to everything but button and submit elements. */
                if (i.type != 'submit' && i.type != 'button') {
                    i.observe('keydown', handler);
                }
            });

            ImpComposeBase.setCursorPosition('composeMessage', this.cursor_pos);

            if (Prototype.Browser.IE) {
                $('subject').observe('keydown', function(e) {
                    if (e.keyCode == Event.KEY_TAB && !e.shiftKey) {
                        e.stop();
                        $('composeMessage').focus();
                    }
                });
            }

            if (ImpComposeBase.editor_on) {
                document.observe('SpellChecker:after', this._onAfterSpellCheck.bind(this));
                document.observe('SpellChecker:before', this._onBeforeSpellCheck.bind(this));
            }

            if ($('to') && !$F('to')) {
                $('to').focus();
            } else if (!$F('subject')) {
                if (ImpComposeBase.editor_on) {
                    $('subject').focus();
                } else {
                    $('composeMessage').focus();
                }
            }

            document.observe('SpellChecker:noerror', this._onNoErrorSpellCheck.bind(this));

            if (Prototype.Browser.IE) {
                $('identity', 'sent_mail', 'upload_1').compact().invoke('observe', 'change', this.changeHandler.bindAsEventListener(this));
            } else {
                document.observe('change', this.changeHandler.bindAsEventListener(this));
            }

            if (this.auto_save) {
                /* Immediately execute to get MD5 hash of empty message. */
                new PeriodicalExecuter(this.uniqSubmit.bind(this, 'auto_save_draft'), this.auto_save * 60).execute();
            }
        }

        document.observe('click', this.clickHandler.bindAsEventListener(this));
        this.resize.bind(this).delay(0.25);
    },

    _onAfterSpellCheck: function()
    {
        this.editor_wait = true;
        CKEDITOR.instances.composeMessage.setData($F('composeMessage'), function() { this.editor_wait = false; }.bind(this));
        $('composeMessage').next().show();
        delete this.sc_submit;
    },

    _onBeforeSpellCheck: function()
    {
        IMP.SpellChecker.htmlAreaParent = 'composeMessageParent';
        $('composeMessage').next().hide();
        CKEDITOR.instances.composeMessage.updateElement();
    },

    _onNoErrorSpellCheck: function()
    {
        if (this.sc_submit) {
            this.skip_spellcheck = true;
            this.uniqSubmit(this.sc_submit.a, this.sc_submit.e);
        } else if (ImpComposeBase.editor_on) {
            this._onAfterSpellCheck();
        } else {
            delete this.sc_submit;
        }
    },

    resize: function()
    {
        var d, e = this.redirect ? $('redirect') : $('compose');

        if (this.popup && !this.reloaded) {
            e = e.getHeight();
            if (!e) {
                return this.resize.bind(this).defer();
            }
            d = Math.min(e, screen.height - 100) - document.viewport.getHeight();
            if (d > 0) {
                window.resizeBy(0, d);
            }
        }
    },

    onBeforeUnload: function()
    {
        if (this.display_unload_warning) {
            return IMP.text.compose_discard;
        }
    },

    onContactsUpdate: function(e)
    {
        ImpComposeBase.updateAddressField($(e.memo.field), e.memo.value);
    }

};

/* Code to run on window load. */
document.observe('dom:loaded', ImpCompose.onDomLoad.bind(ImpCompose));

/* Warn before closing the window. */
Event.observe(window, 'beforeunload', ImpCompose.onBeforeUnload.bind(ImpCompose));

/* Attach event handlers. */
document.observe('ImpContacts:update', ImpCompose.onContactsUpdate.bindAsEventListener(ImpCompose));

/* Catch dialog actions. */
document.observe('IMPDialog:success', function(e) {
    switch (e.memo) {
    case 'pgpPersonal':
    case 'pgpSymmetric':
    case 'smimePersonal':
        IMPDialog.noreload = true;
        ImpCompose.uniqSubmit('send_message');
        break;
    }
});
