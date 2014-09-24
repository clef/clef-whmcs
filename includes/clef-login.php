<?php

function disable_password_login($variables) {
    $user = ClefUser::find(array('id' => $variables['userid']));
    if (!$user->can_login_with_password()) {
        $user->logout();
        ClefUtils::redirect('clientarea.php?disabled=1');
    }
}

function connect_clef_account_on_login($variables) {
    if (ClefUtils::isset_POST('clef_id')) {
        $user = ClefUser::find(array('id' => $variables['userid']));
        $user->associate_clef_id(ClefUtils::isset_POST('clef_id'));

        $_SESSION['logged_in_at'] = time();
    }
}

function process_clef_login_callback() {
    if (ClefUtils::isset_GET('clef') && ClefUtils::isset_GET('code')) {
        try {
            $info = ClefUtils::exchange_oauth_code_for_info(ClefUtils::isset_GET('code'));
            // TODO: figure out error handling for HTTP requests
        } catch (Exception $e) {
            ClefUtils::redirect('clientarea.php');
        }

        $user = ClefUser::find(array('clef_id' => $info->id));

        if ($user) {
            $user->login();

            ClefUtils::redirect('clientarea.php');
        } else {
            ClefUtils::set_message("clef_id", $info->id);
            ClefUtils::set_message("error", "There's <b>no user</b> connected to your Clef account. <br></br> Log in with your standard username and password to <b>automatically connect your Clef account</b> now.");
        }
    }
}

function render_clef_login($data) {
    if (isset($data['loginpage'])) {
        if (ClefUtils::isset_GET('disabled')) {
            $error = "Passwords are disabled for this user.";
        } else if (ClefUtils::get_message('error')) {
            $error = ClefUtils::get_message('error');
        } else {
            $error = null;
        }

        return ClefUtils::render_template('login.tpl', array(
            'script_url' => ClefUtils::script_url('clef', $data['systemurl']),
            'style_url' => ClefUtils::style_url('login', $data['systemurl']),
            'app_id' => ClefSettings::get('application_id'),
            'redirect_url' => $data['systemurl'] . "clientarea.php?clef=true",
            'error' => array("value" => $error, "sanitize" => false),
            'clef_id' => ClefUtils::get_message('clef_id')
        ));
    }
}


add_hook("ClientAreaPage", 1, 'process_clef_login_callback');
add_hook("ClientAreaFooterOutput", 1, 'render_clef_login');

add_hook("ClientLogin", 1, 'disable_password_login');
add_hook("ClientLogin", 2, 'connect_clef_account_on_login');
