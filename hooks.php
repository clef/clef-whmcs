<?php
/**
 * Clef
 *
 * This is the login hook for using the Clef API allowing clients to login to their Client Area account using the Clef service.
 *
 * @package    Clef
 * @author     9th Node Networks <webmaster@9thnode.com>
 * @copyright  Copyright (c) 9th Node Networks 2014-2015
 * @license    http://www.9thnode.com 9th Node Networks Eula
 * @version    1.0
 * @link       http://www.9thnode.com
 */


if (!defined("WHMCS")) die("This file cannot be accessed directly");

class LoginException extends Exception {}

require_once('settings.php');
require_once('includes/clef-settings.php');
require_once('includes/clef-utils.php');
require_once('includes/clef-user.php');



require_once('includes/clef-login.php');
require_once('includes/clef-logout.php');
