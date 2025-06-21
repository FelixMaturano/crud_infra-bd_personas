<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .btn-leer {
            display: inline-block;
            padding: 12px 28px;
            font-size: 16px;
            color: #fff;
            background: linear-gradient(90deg, #007bff 0%, #0056b3 100%);
            border: none;
            border-radius: 6px;
            text-decoration: none;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            transition: background 0.3s, transform 0.2s;
        }
        .btn-leer:hover {
            background: linear-gradient(90deg, #0056b3 0%, #007bff 100%);
            transform: translateY(-2px) scale(1.04);
        }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #f4f8fb;
        }
    </style>
</head>
<body>
    <a href="read.php" class="btn-leer">Ir a Leer Datos</a>
</body>
</html>