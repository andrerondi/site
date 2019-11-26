<?php

$sevidor = "localhost";
$usuario = "root";
$senha = "";
$db = "web";

$conexao = mysqli_connect($sevidor, $usuario, $senha, $db);


$query = "SELECT * FROM curso";
$consulta_curso = mysqli_query($conexao, $query);
