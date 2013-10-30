<?php
/**
 * Copyright 2013 Horde LLC (http://www.horde.org/)
 *
 * See the enclosed file COPYING for license information (LGPL). If you
 * did not receive this file, see http://www.horde.org/licenses/lgpl21.
 *
 * @category  Horde
 * @copyright 2013 Horde LLC
 * @license   http://www.horde.org/licenses/lgpl21 LGPL 2.1
 * @package   Pack
 */

/**
 * PHP built-in json_encode()/json_decode() handler.
 *
 * @author    Michael Slusarz <slusarz@horde.org>
 * @category  Horde
 * @copyright 2013 Horde LLC
 * @license   http://www.horde.org/licenses/lgpl21 LGPL 2.1
 * @package   Pack
 */
class Horde_Pack_Driver_Json extends Horde_Pack_Driver
{
    /**
     */
    protected $_id = 2;

    /**
     */
    static public function supported()
    {
        return extension_loaded('json');
    }

    /**
     */
    public function pack($data)
    {
        /* For JSON, we need to keep track whether the initial data was
         * an object or class. The initial JSON character is one of the
         * following:
         *   0: Non-array
         *   1: Array */
        return intval(is_array($data)) . json_encode($data);
    }

    /**
     */
    public function unpack($data)
    {
        return json_decode(substr($data, 1), ($data[0] == 1));
    }

}
