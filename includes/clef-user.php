<?php

class ClefUser {

    private static $fields = "id,email,password,logged_out_at,clef_id";
    private static $cache = array();

    public static function find($data) {
        if (isset($data['id'])) return self::find_by_id($data['id']);
        if (isset($data['clef_id'])) return self::find_by_clef_id($data['clef_id']);
    }

    private static function find_by_id($id) {
        if (isset(self::$cache[$id])) return new ClefUser(self::$cache[$id]);

        $query = select_query("tblclients", self::$fields, array("id" => $id));
        $results = mysql_fetch_assoc($query);

        if ($results) {
            self::$cache[$id] = $results;

            return new ClefUser($results);
        } else {
            return false;
        }
    }

    private static function find_by_clef_id($id) {
        $query = select_query("tblclients", self::$fields, array("clef_id" => $id));
        $results = mysql_fetch_assoc($query);

        if ($results) {
            self::$cache[$id] = $results;

            return new ClefUser($results);
        } else {
            return false;
        }
    }

    public static function set_logged_out_at($where) {
        return update_query(
            "tblclients",
            array('logged_out_at' => time()),
            $where
        );
    }

    function __construct($data) {
        foreach ($data as $key => $value) {
            $this->{$key} = $value;
        }
    }

    public function generate_session_key() {
        # load the configuration file so we get access to the $cc_encryption_hash
        # used to generate the key for the user session
        $configuration_path = ClefUtils::get_whmcs_base() . "configuration.php";
        include($configuration_path);

        return sha1($this->id . $this->password . $_SERVER['REMOTE_ADDR'] . substr(sha1($cc_encryption_hash),0,20));
    }

    public function login() {
        if(!session_id()) session_start();

        $_SESSION['uid'] = $this->id;
        $_SESSION['upw'] = $this->generate_session_key();
        $_SESSION['logged_in_at'] = time();
    }

    public function logout() {
        if(!session_id()) session_start();

        unset($_SESSION['uid']);
        unset($_SESSION['upw']);
        unset($_SESSION['logged_in_at']);
    }

    public function has_clef() {
        return !!$this->clef_id;
    }


    public function is_logged_out() {
        if (isset($_SESSION['logged_in_at'])) {
            return $this->logged_out_at && $this->logged_out_at > $_SESSION['logged_in_at'];
        }
    }

    public function connect_clef_account($clef_id) {
        return update_query(
            "tblclients",
            array('clef_id' => $clef_id),
            array('id' => $this->id)
        );
    }

    public function disconnect_clef_account() {
        return update_query(
            "tblclients",
            array('clef_id' => null),
            array('id' => $this->id)
        );
    }

    public function can_login_with_password() {
        if (ClefSettings::get('passwords_disabled')) {
            return false;
        }

        if (ClefSettings::get('passwords_disabled_for_clef') && $this->clef_id) {
            return false;
        }

        return true;
    }
}