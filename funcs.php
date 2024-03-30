<?php

use PHPMailer\PHPMailer\SMTP;

function send_mail(array $mail_settings, array $to, string $subject, string $body): bool
{
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = $mail_settings['host'];
        $mail->SMTPAuth = $mail_settings['auth'];
        $mail->Username = $mail_settings['username'];
        $mail->Password = $mail_settings['password'];
        $mail->SMTPSecure = $mail_settings['secure'];
        $mail->Port = $mail_settings['port'];
        $mail->CharSet = $mail_settings['charset'];

        // $mail->setFrom($mail_settings['from'], $mail_settings['name']);
        $mail->setFrom($mail_settings['from'], $mail_settings['name']);
        foreach ($to as $email) {
            $mail->addAddress($email);
        }

        $mail->isHTML($mail_settings['is_html']);
        $mail->Subject = $subject;
        // $mail->Body = $body;
        $mail->Body = $body;

        // return $mail->send();
        if(!$mail->send()) {
            $message = "Err";
        } else {
            $message = "not err";
        };
        $response = ['message' => $message];

        echo json_encode($response);

    } catch (\PHPMailer\PHPMailer\Exception $e) {
//        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        return false;
    }
}
?>