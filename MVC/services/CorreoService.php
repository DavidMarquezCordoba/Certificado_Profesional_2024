<?php 
// aqui estaran las clases auxiliares, que no son tan importantes pero que nos ayudaran a hacer muchas cosas
// no pertenecen a nuestra estructura principal ni a ninguna vista
// 1) instalamos una libreria con composer

namespace Services;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;  // esto nos permite hacer un try catch

class CorreoService {
    private $config;

    // como son credenciales sensibles, lo ponemos en .env
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
            $mail = new PHPMailer(true); // creamos una instancia del PHPMailer, true significa que vamos a trabajar con exepciones
            $mail->isSMTP(); // aca le decimos que nuestro servidor funciona con el protocolo SMTP (protocolo de correo saliente)
            $mail->Host = $this->config['host']; // en PHPMailer hay un public host
            $mail->SMTPAuth = true; // eso significa que necesita autorizacion 
            $mail->Username = $this->config['username'];
            $mail->Password = $this->config['password']; 
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // aca le digo el tipo de seguridad
            $mail->Port = $this->config['port'];

            // hay una variable privada que vamos a modificar entonces necesitamos un "set": un metodo para poder modificarla
            $mail->setFrom($this->config['from_email'],$this->config['from_name']); // le digo como primer argumento el correo y como segundo el nombre que quiero que ponga
            $mail->addAddress($destinatario);

            $mail->isHTML(true); // va a ser un html muy simple, le podemos meter elementos (h1, h2, p) y si queremos poner css tiene que ser <style>... in line
            $mail->Subject = $asunto;
            $mail->Body = $cuerpo;

            $mail->send(); // le metemos toda la configuracion y enviamos
            return true;

        } catch (Exception $e) {
            return false;            
        }
    }








}

?>