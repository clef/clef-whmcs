<?php

/**
 * Plugin-wide utility functions
 *
 * @package Clef
 * @since 2.0
 */
class ClefUtils {

    private static $messages = array();

    /**
     * Runs esc_html on strings. Leaves input untouched if it's not a string.
     *
     * @return mixed
     */
    private static function escape_string($maybe_string) {
        $escaped = $maybe_string;
        if (is_string($maybe_string)) {
            $escaped = htmlspecialchars($maybe_string);
        }
        return $escaped;
    }

    /**
     * Renders the specified template, giving it access to $variables.
     * Strings are escaped.
     *
     * @param string $name The name (with no .php extension) of a file in
     *   templates/.
     * @param array $variables A list of variables to be used in the
     *   template.
     * @return string
     */
    public static function render_template($name, $variables=false, $sanitize=true) {
        if ($variables) {
            $escaped_variables = $variables;

            foreach ($variables as $var_name => $variable) {
                if ($sanitize && !(is_array($variable) && isset($variable['sanitize']) && !$variable['sanitize'])) {
                    $escaped_variables[$var_name] = self::escape_string($variable);
                }
            }

            extract($escaped_variables, EXTR_SKIP);
        }
        ob_start();
        require(CLEF_TEMPLATES_PATH . $name . '.php');
        return ob_get_clean();
    }

    /**
     * Return $_GET[$key] if it exists.
     *
     * @param string $key
     * @return mixed
     */
    public static function isset_GET($key) {
        return isset($_GET[$key]) ? $_GET[$key] : null;
    }

    /**
     * Return $_POST[$key] if it exists.
     *
     * @param string $key
     * @return mixed
     */
    public static function isset_POST($key) {
        return isset($_POST[$key]) ? $_POST[$key] : null;
    }

    /**
     * Return $_REQUEST[$key] if it exists.
     *
     * @param string $key
     * @return mixed
     */
    public static function isset_REQUEST($key) {
        return isset($_REQUEST[$key]) ? $_REQUEST[$key] : null;
    }

    public static function set_html_content_type() {
        return 'text/html';
    }

    public static function exchange_oauth_code_for_info($code, $settings=null, $app_id=false, $app_secret=false) {

        if (!$app_id) $app_id = ClefSettings::get( 'application_id' );
        if (!$app_secret) $app_secret = ClefSettings::get( 'application_secret' );

        $args = array(
            'code' => $code,
            'app_id' => $app_id,
            'app_secret' => $app_secret,
        );

        $response = curlCall(CLEF_API_BASE . 'authorize', $args, array( 'method'=> 'POST', 'timeout' => 20 ));
        $body = json_decode( $response );

        if (!$body) throw new LoginException("Somethign went wrong: " . $response);
        if ( !isset($body->success) || $body->success != 1 ) {
            throw new LoginException('Error retrieving Clef access token: ' . $body->error);
        }

        $response = curlCall( CLEF_API_BASE . "info?access_token={$body->access_token}" );
        $body = json_decode( $response );

        if (!$body) throw new LoginException("Somethign went wrong: " . $response);
        if ( !isset($body->success) || $body->success != 1 ) {
            throw new LoginException('Error retrieving Clef user data: ' . $body->error);
        }

        return $body->info;
    }

    public static function get_whmcs_base() {
        return preg_replace('/^(.*)\/modules\/.*$/', '$1/', __FILE__);
    }

    public static function script_url($name, $base) {
        if (!$base) $base = "";
        return $base . "modules/addons/clef/static/dist/js/$name.js";
    }

    public static function style_url($name, $base) {
        if (!$base) $base = "";
        return $base . "modules/addons/clef/static/dist/css/$name.css";
    }

    public static function redirect($url) {
        header('Location: '. $url);
        die();
    }

    public static function set_message($name, $msg) {
        self::$messages[$name] = $msg;
    }

    public static function get_message($name) {
        if (isset(self::$messages[$name])) return self::$messages[$name];
        return null;
    }

    public static function return_json($msg) {
        echo(json_encode($msg));
        die();
    }
}
?>
