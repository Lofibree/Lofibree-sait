<?php

$mail_settings_dev = [
    'host' => 'smtp.mailtrap.io',
    'auth' => true,
    'port' => 2525,
    'username' => 'your_username',
    'password' => 'your_password',
    'secure' => null,
    'charset' => 'UTF-8',
    'from' => 'your_email@inbox.mailtrap.io',
    'name' => 'WebForMyself',
    'is_html' => true,
];

$mail_settings_prod = [
    'host' => 'smtp.gmail.com',
    'auth' => true,
    'port' => 587, // 587 465
    'username' => 'nastenkapersik17@gmail.com',
    'password' => 'wryo divy ixrk zovy',
    'secure' => 'tls', // tls ssl
    'charset' => 'UTF-8',
    'from' => 'nastenkapersik17@gmail.com',
    'name' => 'nastenkapersik17@gmail.com',
    'is_html' => true,
];
?>