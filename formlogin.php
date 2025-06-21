<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="div-login">
        <h1>Iniciar Sesión</h1>
        <form action="autenticar.php" method="post">
        <label for="Correo" id="correo">Correo</label><br>
        <input type="text"  name="Correo"><br>
        <label for="password" id="password">Contraseña</label><br>
        <input type="password" name="password"><br>
        <input type="submit" value="Ingresar" id="ingresar">
    </div>
</body>
</html>