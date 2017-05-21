<?php
require 'vendor/autoload.php';
include_once('config/config.php');
include_once('lib/functions.php');
$app = new \Slim\Slim();


$app->post('/logout', function () use($app) {
	
});
$app->run();

?>
