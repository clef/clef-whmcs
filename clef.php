<?php
/**
 * Clef
 *
 * This addon module allows clients to login to their Client Area account using the Clef service.
 *
 * @package    Clef Login
 * @author     9th Node Networks <webmaster@9thnode.com>
 * @copyright  Copyright (c) 9th Node Networks 2014-2015
 * @license    http://www.9thnode.com 9th Node Networks Eula
 * @version    1.0
 * @link       http://www.9thnode.com
 */

if (!defined("WHMCS")) die("This file cannot be accessed directly");

function clef_config() {
    return array(
        "name" => "Clef",
        "description" => "This addon module allows clients to login to the Client Area account using Clef.",
        "version" => "1.0",
        "author" => "9th Node Networks",
        "language" => "english",
        "fields" => array(
            "application_id" => array (
                "FriendlyName" => "Application ID",
                "Size" => "25",
                "Type" => "text",
                "Description" => "Your Clef application ID. You can create a new Clef application at http://getclef.com/user/login."
            ),
            "application_secret" => array (
                "FriendlyName" => "Application Secret",
                "Size" => "25",
                "Type" => "text",
                "Description" => "Your Clef application secret. You can create a new Clef application at http://getclef.com/user/login."
            ),
            "passwords_disabled" => array(
                "FriendlyName" => "Disable passwords",
                "Type" => "yesno",
                "Description" => "Disable passwords for all users and only allow logins with Clef."
            ),
            "passwords_disabled_for_clef" => array(
                "FriendlyName" => "Disable passwords for users with Clef",
                "Type" => "yesno",
                "Description" => "Disable passwords for all users that have Clef enabled."
            )
        )
    );
}

function clef_activate() {

    # Add the columns necessary for Clef
    $query = "ALTER TABLE tblclients
        ADD COLUMN clef_id VARCHAR(25),
        ADD COLUMN logged_out_at INT
    ;";
    $result = full_query($query);

    # Return Result
    return array('status'=>'success','description'=>'Module activated successfully! Continue setup to let you users log in with Clef');

}

function clef_deactivate() {

    # Add the columns necessary for Clef
    $query = "ALTER TABLE tblclients
        DROP COLUMN clef_id,
        DROP COLUMN logged_out_at
    ;";
    $result = full_query($query);

    # Return Result
    return array('status'=>'success', 'description'=>'Module deactivated.');

}

function clef_upgrade($vars) {

    $version = $vars['version'];

}

function clef_output() {
    echo 'HEYYYOOJJ$';
}


function clef_clientarea($vars) {
    error_log('hey');
    $modulelink = $vars['modulelink'];
    $version = $vars['version'];
    $option1 = $vars['option1'];
    $option2 = $vars['option2'];
    $option3 = $vars['option3'];
    $option4 = $vars['option4'];
    $option5 = $vars['option5'];
    $option6 = $vars['option6'];
    $LANG = $vars['_lang'];

    return array(
        'pagetitle' => 'Clef is the best',
        'breadcrumb' => array('index.php?m=clef'=>'Clef Addon'),
        'templatefile' => 'clienthome',
        'requirelogin' => true, # or false
        'vars' => array(
            'testvar' => 'demo',
            'anothervar' => 'value',
            'sample' => 'test',
        ),
    );

}