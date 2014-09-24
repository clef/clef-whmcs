<?php

class ClefSettings {

    private static $module_name = "clef";

    public static function get($setting) {
        $query = sprintf(
            "SELECT value FROM tbladdonmodules WHERE module = '%s' AND setting = '%s';",
            self::$module_name,
            $setting
        );

        $results = mysql_fetch_row(full_query($query));

        if (count($results) > 0) return $results[0];
        return null;
    }

    public static function set($setting, $value) {

    }
}