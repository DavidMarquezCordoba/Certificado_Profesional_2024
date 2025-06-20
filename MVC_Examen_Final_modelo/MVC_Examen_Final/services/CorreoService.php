<?php 
namespace Services;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


class CorreoService {
    private $config;

    public function __construct() {
        $this->config = [
            'host' => $_ENV['MAIL_HOST'],
            'port' => $_ENV['MAIL_PORT'],
            'username' => $_ENV['MAIL_USERNAME'],
            'password' => $_ENV['MAIL_PASS'],
            'from_email' => $_ENV['MAIL_FROM'],
            'from_name' => $_ENV['MAIL_NAME']
        ];
    }

    public function enviarCorreo($destinatario, $asunto, $cuerpo) {
        try {
            $mail = new PHPMailer(true);
            $mail->isSMTP();
            $mail->Host = $this->config['host'];
            $mail->SMTPAuth = true;
            $mail->Username = $this->config['username'];
            $mail->Password = $this->config['password'];
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = $this->config['port'];

            $mail->setFrom($this->config['from_email'],$this->config['from_name']);
            $mail->addAddress($destinatario);

            $mail->isHTML(true);
            $mail->Subject = $asunto;
            $mail->Body = $cuerpo;

            $mail->send();
            return true;

        } catch (Exception $e) {
            return false;
        }
    }
}
?>