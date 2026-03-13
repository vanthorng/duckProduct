<?php

declare(strict_types=1);

$publicPath = __DIR__.'/public';
$requestUri = $_SERVER['REQUEST_URI'] ?? '/';
$uri = urldecode(parse_url($requestUri, PHP_URL_PATH) ?: '/');
$filePath = $publicPath.$uri;

if ($uri !== '/' && is_file($filePath)) {
    $mimeType = mime_content_type($filePath) ?: 'application/octet-stream';
    $fileSize = filesize($filePath);

    header('Content-Type: '.$mimeType);

    if (is_int($fileSize)) {
        header('Content-Length: '.(string) $fileSize);
    }

    readfile($filePath);

    return;
}

$storagePath = getenv('LARAVEL_STORAGE_PATH') ?: sys_get_temp_dir().'/storage';
$cachePath = sys_get_temp_dir().'/bootstrap/cache';

$requiredDirectories = [
    $storagePath,
    $storagePath.'/app',
    $storagePath.'/framework',
    $storagePath.'/framework/cache',
    $storagePath.'/framework/cache/data',
    $storagePath.'/framework/sessions',
    $storagePath.'/framework/views',
    $storagePath.'/logs',
    $cachePath,
];

foreach ($requiredDirectories as $directory) {
    if (! is_dir($directory)) {
        mkdir($directory, 0777, true);
    }
}

function setRuntimeEnv(string $key, string $value): void
{
    putenv($key.'='.$value);
    $_ENV[$key] = $value;
    $_SERVER[$key] = $value;
}

setRuntimeEnv('LARAVEL_STORAGE_PATH', $storagePath);
setRuntimeEnv('APP_CONFIG_CACHE', getenv('APP_CONFIG_CACHE') ?: $cachePath.'/config.php');
setRuntimeEnv('APP_EVENTS_CACHE', getenv('APP_EVENTS_CACHE') ?: $cachePath.'/events.php');
setRuntimeEnv('APP_PACKAGES_CACHE', getenv('APP_PACKAGES_CACHE') ?: $cachePath.'/packages.php');
setRuntimeEnv('APP_ROUTES_CACHE', getenv('APP_ROUTES_CACHE') ?: $cachePath.'/routes-v7.php');
setRuntimeEnv('APP_SERVICES_CACHE', getenv('APP_SERVICES_CACHE') ?: $cachePath.'/services.php');
setRuntimeEnv('VIEW_COMPILED_PATH', getenv('VIEW_COMPILED_PATH') ?: $storagePath.'/framework/views');
setRuntimeEnv('CACHE_STORE', getenv('CACHE_STORE') ?: 'array');
setRuntimeEnv('SESSION_DRIVER', getenv('SESSION_DRIVER') ?: 'cookie');
setRuntimeEnv('QUEUE_CONNECTION', getenv('QUEUE_CONNECTION') ?: 'sync');
setRuntimeEnv('LOG_CHANNEL', getenv('LOG_CHANNEL') ?: 'stderr');

require $publicPath.'/index.php';
