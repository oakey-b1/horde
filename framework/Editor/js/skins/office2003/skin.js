CKEDITOR.skins.add("office2003",(function(){var b=[];if(CKEDITOR.env.ie&&CKEDITOR.env.version<7){b.push("icons.png","images/sprites_ie6.png","images/dialog_sides.gif")}return{preload:b,editor:{css:["editor.css"]},dialog:{css:["dialog.css"]},templates:{css:["templates.css"]},margins:[0,14,18,14]}})());(function(){CKEDITOR.dialog?b():CKEDITOR.on("dialogPluginReady",b);function b(){CKEDITOR.dialog.on("resize",function(a){var n=a.data,m=n.width,l=n.height,k=n.dialog,j=k.parts.contents;if(n.skin!="office2003"){return}j.setStyles({width:m+"px",height:l+"px"});if(!CKEDITOR.env.ie){return}var i=function(){var e=k.parts.dialog.getChild([0,0,0]),d=e.getChild(0),c=e.getChild(2);c.setStyle("width",d.$.offsetWidth+"px");c=e.getChild(7);c.setStyle("width",d.$.offsetWidth-28+"px");c=e.getChild(4);c.setStyle("height",l+d.getChild(0).$.offsetHeight+"px");c=e.getChild(5);c.setStyle("height",l+d.getChild(0).$.offsetHeight+"px")};setTimeout(i,100);if(a.editor.lang.dir=="rtl"){setTimeout(i,1000)}})}})();