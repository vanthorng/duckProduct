<?php

declare(strict_types=1);

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

$basePath = __DIR__;
$storagePath = getenv('LARAVEL_STORAGE_PATH') ?: sys_get_temp_dir().'/storage';
$cachePath = dirname((string) (getenv('APP_CONFIG_CACHE') ?: sys_get_temp_dir().'/bootstrap/cache/config.php'));

$directories = [
    $storagePath,
    $storagePath.'/app',
    $storagePath.'/framework',
    $storagePath.'/framework/cache',
    $storagePath.'/framework/cache/data',
    $storagePath.'/framework/sessions',
    $storagePath.'/framework/testing',
    $storagePath.'/framework/views',
    $storagePath.'/logs',
    $cachePath,
];

foreach ($directories as $directory) {
    if (! is_dir($directory)) {
        mkdir($directory, 0777, true);
    }
}

if (! defined('LARAVEL_STORAGE_PATH')) {
    define('LARAVEL_STORAGE_PATH', $storagePath);
}

require $basePath.'/vendor/autoload.php';

/** @var Application $app */
$app = require $basePath.'/bootstrap/app.php';

$app->useStoragePath($storagePath);
$app->handleRequest(Request::capture());
