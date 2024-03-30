<?php

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/conf.php';
require_once __DIR__ . '/funcs.php';

$name = $_POST['name'];
$emailSender = $_POST['email'];
$description = $_POST['description'];


// $body = "<h1>Письмо с сайта</h1>\n
// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa doloribus eius illo in ipsam nisi, nulla odio quam quibusdam, repellat reprehenderit sapiente sit suscipit temporibus tenetur unde vel voluptate.";

$body = "От: $name &lt;br&gt; Email: $emailSender &lt;br&gt; Сообщение: $description";

// var_dump(send_mail($mail_settings_prod, ['nastenkapersik17@gmail.com'], 'Письмо с сайта', $body));
send_mail($mail_settings_prod, ['st068957@student.spbu.ru'], 'Письмо с сайта', $body);

?>