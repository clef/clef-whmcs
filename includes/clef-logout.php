<?php

function process_clef_logout_callback() {
    if(isset($_POST) && isset($_POST['logout_token'])) {

        $args = array(
            'logout_token' => $_REQUEST['logout_token'],
            'app_id' => ClefSettings::get('application_id'),
            'app_secret' => ClefSettings::get('application_secret'),
        );

        $response = curlCall(
            CLEF_API_BASE . 'logout',
            $args,
            array( 'method' => 'POST', 'timeout' => 45)
        );

        $body = json_decode($response);

        if (isset($body->success) && isset($body->clef_id)) {
            ClefUser::set_logged_out_at(array('clef_id' => $body->clef_id));
            $return = array(
                "success" => true
            );
        } else {
            $return = array(
                "success" => false,
                "error" => $body->error
            );
        }

        ClefUtils::return_json($return);
    }
}

function check_user_logout() {
    if (isset($_SESSION['uid']) && isset($_SESSION['logged_in_at'])) {
        $user = ClefUser::find(array('id' => $_SESSION['uid']));
        if ($user->is_logged_out()) {
            $user->logout();
            $logged_out = true;
        } else {
            $logged_out = false;
        }

        if (ClefUtils::isset_GET('ajax_logout')) {
            return ClefUtils::return_json(array(
                'success' => true,
                'loggedOut' => $logged_out
            ));
        } else {
            if ($logged_out) return ClefUtils::redirect('clientarea.php');
        }
    }
}


function render_logout_check($data) {
    if (isset($data['loggedin']) && $data['loggedin']) {
        return ClefUtils::render_template('logout.tpl', array(
            'script_url' => ClefUtils::script_url('clef', $data['systemurl'])
        ));
    }
}



add_hook("ClientAreaPage", 1, 'process_clef_logout_callback');
add_hook("ClientAreaPage", 1, 'check_user_logout');

add_hook("ClientAreaFooterOutput", 1, 'render_logout_check');
