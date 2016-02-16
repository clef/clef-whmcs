<?php
/**
 * Clef
 *
 * This addon module allows clients to login to their Client Area account using the Clef service.
 *
 * @package    Clef
 * @author     Clef, Inc. <support@getclef.com>
 * @copyright  Copyright (c) Clef 2014-2015
 * @license    MIT
 * @version    1.0
 * @link       https://getclef.com
 */


if (!defined("WHMCS")) die("This file cannot be accessed directly");

require_once('clef-includes.php');

require_once('includes/clef-login.php');
require_once('includes/clef-logout.php');

use WHMCS\View\Menu\Item as MenuItem;
 
add_hook('ClientAreaSecondaryNavbar', 1, function (MenuItem $secondaryNavbar)
{
    $client = Menu::context('client');
 
    if (!is_null($client)) {
        if (!is_null($secondaryNavbar->getChild('Account'))) {
            $secondaryNavbar->getChild('Account')
                ->addChild('Manage Passwordless Login', array(
                    'label' => 'Manage Passwordless Login',
                    'uri' => 'index.php?m=clef',
                    'icon' => 'fa-thumbs-up',
                    'order' => '44',
                ));
        }
    }
});
