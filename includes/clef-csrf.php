<?php

class ClefCSRF {

    public static function generate( $key ) {
        // token generation (basically base64_encode any random complex string, time() is used for token expiration)
        $token = base64_encode( time() . $extra . self::randomString( 32 ) );
        // store the one-time token in session
        $_SESSION[ 'csrf_' . $key ] = $token;

        return $token;
    }

    public static function verify($key, $token) {
        // Get valid token from session
        $hash = $_SESSION[ 'csrf_' . $key ];

        // Check if session token matches form token
        if ( $token != $hash ) return false;

        return true;
    }

    protected static function randomString( $length ) {
        $seed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijqlmnopqrtsuvwxyz0123456789';
        $max = strlen( $seed ) - 1;

        $string = '';
        for ( $i = 0; $i < $length; ++$i )
            $string .= $seed{intval( mt_rand( 0.0, $max ) )};

        return $string;
    }

}