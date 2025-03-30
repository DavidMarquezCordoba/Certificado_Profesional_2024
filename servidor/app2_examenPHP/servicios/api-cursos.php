<?php
  session_start();

  // Verificar si se ha enviado la clave
  if (!isset($_GET['key'])) {
      http_response_code(403);
      echo json_encode(["error" => "Falta clave"]);
      exit;
  }

  // Verificar si la clave coincide con la clave de sesión
  if ($_GET['key'] !== $_SESSION['k']) {
      http_response_code(403);
      echo json_encode(["error" => "Clave incorrecta"]);
      exit;
  }

  // Si la clave es válida, devolver cursos.json
  header("Content-Type: application/json");

  $cursos = json_decode(file_get_contents("../json/cursos.json"), true);
  echo json_encode($cursos);
?>
