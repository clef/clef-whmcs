<?php

function clef_clientarea($vars) {
    $properties = array(
        'pagetitle' => 'Manage your Clef account',
        'breadcrumb' => array('index.php?m=clef' => 'Manage Clef'),
        'templatefile' => 'templates/connect',
        'requirelogin' => true, # or false
    );

    $user = ClefUser::find(array("id" => $_SESSION['uid']));
    if (!$user) return $properties;

    $error = null;

    if (ClefUtils::isset_POST('action') == "disconnect") {
        if (ClefCSRF::verify('connect', ClefUtils::isset_POST('csrf_token'))) {
            $user->disconnect_clef_account();
            ClefUtils::redirect('index.php?m=clef');
        } else {
            $error = "Invalid CSRF token.";
        }
    }

    if (ClefUtils::isset_GET('action') == "connect") {
        if (ClefCSRF::verify('connect', ClefUtils::isset_GET('state'))) {
            try {
                $info = ClefUtils::exchange_oauth_code_for_info(ClefUtils::isset_GET('code'));
                $user->connect_clef_account($info->id);
                ClefUtils::redirect('index.php?m=clef');
            } catch (Exception $e) {
                $error = $e->message;
            }
        } else {
            $error = "Invalid CSRF token.";
        }
    }

    $properties['vars'] = array(
        'has_clef_account' => $user->has_clef(),
        'style_path' => ClefUtils::style_url('connect'),
        'csrf_token' => ClefCSRF::generate('connect'),
        'app_id' => ClefSettings::get('application_id')
    );

    return $properties;
}

function add_clef_js($data) {
    return ClefUtils::render_template(
        'js.tpl',
        array(
            'script_url' => ClefUtils::script_url('clef', $data['systemurl']),
            'data' => array(
                'baseURL' => $data['systemurl']
            )
        )
    );
}

add_hook("ClientAreaFooterOutput", 1, 'add_clef_js');