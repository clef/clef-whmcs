<?php

define('CLEF_PATH', __DIR__);
define('CLEF_TEMPLATES_PATH', CLEF_PATH . "/templates/");

if (!defined('CLEF_BASE')) define( 'CLEF_BASE', 'https://clef.io');
if (!defined('CLEF_JS_URL')) define( 'CLEF_JS_URL', CLEF_BASE . '/v3/clef.js');
if (!defined('CLEF_API_BASE')) define( 'CLEF_API_BASE', CLEF_BASE . '/api/v1/');