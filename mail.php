<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        $name = strip_tags(trim($_POST["name"]));
        $subject = strip_tags(trim($_POST["subject"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "Oops! Сообщение не отправлено";
            exit;
        }

        $recipient = "example@gmail.com";

        $subject = "Новое сообщение от $name";

        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Subject: $subject\n\n";
        $email_content .= "Message:\n$message\n";

        $email_headers = "From: $name <$email>";

        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Ваше сообщение отправлено. Ожидайте ответа.";
        } else {
            http_response_code(500);
            echo "Oops! Что-то пошло не так.";
        }

    } else {
        http_response_code(403);
        echo "Oops! Что-то пошло не так.";
    }
?>