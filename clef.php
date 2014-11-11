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
 * @version    0.0.2
 * @link       https://getclef.com
 */

if (!defined("WHMCS")) die("This file cannot be accessed directly");

require_once('clef-includes.php');

function clef_config() {
    return array(
        "name" => "Clef",
        "description" => "This addon module allows clients to login to the Client Area account using Clef.",
        "version" => "0.0.2",
        "author" => "Clef",
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
