<?php include("conexion.php");
session_start();
if (!isset($_SESSION["Correo"])) {
    header("Location: formlogin.html");
    exit();
}

$sql = "SELECT id, Nombre, Apellido, Fecha_nacimiento, Sexo, Correo, nivel FROM personas"; 
$resultado = $con->query($sql);
?>
<style>
    body{
        background-color:rgb(138, 194, 198);
    }
    .container{
        background-color: white;
        margin: 20px auto;
        margin-top: 20px;

    }
    .btn-editar {
        background-color: #28a745 !important;
        color: #fff !important;
        border: none;
        border-radius: 4px;
        padding: 6px 16px;
        margin-right: 6px;
        cursor: pointer;
        transition: background 0.2s;
    }
    .btn-editar a {
        color: #fff !important;
        text-decoration: none;
    }
    .btn-editar:hover {
        background-color: #218838 !important;
    }
    .btn-eliminar {
        background-color: #dc3545 !important;
        color: #fff !important;
        border: none;
        border-radius: 4px;
        padding: 6px 16px;
        cursor: pointer;
        transition: background 0.2s;
    }
    .btn-eliminar a {
        color: #fff !important;
        text-decoration: none;
    }
    .btn-eliminar:hover {
        background-color: #c82333 !important;
    }
    .btn-insertar {
        background-color: #007bff !important;
        color: #fff !important;
        border: none;
        border-radius: 4px;
        padding: 8px 20px;
        cursor: pointer;
        font-size: 16px;
        text-decoration: none;
        margin-top: 18px;
        display: inline-block;
        transition: background 0.2s;
        margin-left: 600px;
        margin-top: 20px;
    }
    .btn-insertar:hover {
        background-color: #0056b3 !important;
    }
</style>
<?php if($_SESSION['nivel'] == 1) {  ?>
<a href="forminsertar.html" class="btn-insertar" style="margin-left:560px; margin-bottom:18px;">Insertar</a>
 <?php } ?>
<table style = "border-collapse: collapse" border="1"  class="container">
    <thead style = "background-color: green">
        <tr>
            <th width = "100px">Nombres</th>
            <th width = "150px">Apellidos</th>
            <th width = "60px">Fecha_nacimiento</th>
            <th width = "10px">Sexo</th>
            <th width = "150px">Correo</th>
            <th width = "10px">Nivel</th>
            <?php if($_SESSION['nivel'] == 1) { ?>
            <th>Operaciones</th>
            <?php } ?>
        </tr>
    </thead>
    <?php
    while($row = mysqli_fetch_array($resultado)){
    ?>
    <tr>
        <td><?php echo $row['Nombre'];?></td>
        <td><?php echo $row['Apellido'];?></td>
        <td><?php echo $row['Fecha_nacimiento'];?></td>
        <td><?php echo $row['Sexo'];?></td>
        <td><?php echo $row['Correo'];?></td>
        <td><?php echo $row['nivel'];?></td>
        <!-- verificar 1 si es administrador me permita ver esto  de lo contrario no  -->
         <?php if($_SESSION['nivel'] == 1) {  ?>
        <td><button class="btn-editar"><a href="formeditar.php?id=<?php echo $row['id'];?>">Editar</a></button><button class="btn-eliminar"><a href = "delete.php?id=<?php echo $row['id'];?>">Eliminar</a></button></td>
         <?php } ?>
    </tr>
   <?php }?>
</table>