var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close")[0];

mostrar = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function openModal() {
  modal.style.display = "block";
}

function cargarContenido(abrir) {
  var contenedor;
  contenedor = document.getElementById("contenido");
  fetch(abrir)
    .then((response) => response.text())
    .then((data) => (contenedor.innerHTML = data));
}

function iniciarSesion() {
  var url = `formlogin.html`;
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#titulo-modal").innerHTML = "Login";
      document.querySelector("#contenido-modal").innerHTML = data;
      document.getElementById("myModal").style.display = "block";
    });
}

function editar(id) {
  var url = `formeditar.php?id=${id}`;
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#titulo-modal").innerHTML = "Editar";
      document.querySelector("#contenido-modal").innerHTML = data;
      document.getElementById("myModal").style.display = "block";
    });
}

function guardarEditar() {
  var datos = new FormData(document.querySelector("#form-edit"));

  fetch("edit.php", { method: "POST", body: datos })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#titulo-modal").innerHTML = "Exito";
      document.querySelector("#contenido-modal").innerHTML = data.message;
      setTimeout(() => {
        modal.style.display = "none";
        cargarContenido("read.php");
      }, 1500);
    });
}

function insertar() {
  var url = `forminsertar.html`;
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#titulo-modal").innerHTML = "Insertar";
      document.querySelector("#contenido-modal").innerHTML = data;
      document.getElementById("myModal").style.display = "block";
    });
}

function guardarInsertar() {
  var datos = new FormData(document.querySelector("#form-create"));

  fetch("create.php", { method: "POST", body: datos })
    .then((response) => response.json())
    .then((data) => {
      // Mostrar el modal con el mensaje
      if (data.success) {
        document.querySelector("#titulo-modal").innerHTML = data.success
          ? "Éxito"
          : "Error";
        document.querySelector("#contenido-modal").innerHTML = data.message;
        modal.style.display = "block";

        // Configurar el cierre automático
        setTimeout(() => {
          modal.style.display = "none";
          if (data.success) {
            location.reload(); // Solo recargar si fue exitoso
          }
        }, 2000);
      }
    });
}

function eliminar(id) {
  var url = `delete.php?id=${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#titulo-modal").innerHTML = "Eliminar";
      document.querySelector("#contenido-modal").innerHTML = data.message;
      document.getElementById("myModal").style.display = "block";

      setTimeout(() => {
        modal.style.display = "none";
        if (data.success) {
          location.reload(); // Solo recargar si fue exitoso
        }
      }, 2000);
    });
}

function renderizarTabla(objeto) {
  var lista = objeto.datos;
  var html = "";

  html = `
      <form action="javascript:guardarEditar()" id="form-edit" method="post">
    <label for="Nombre">Nombres:</label>
    <input type="text" name="Nombre" value="<?php echo $row['Nombre'];?>">
    <br>
    <label for="Apellido">Apellidos:</label>
    <input type="text"name="Apellido" value="<?php echo $row['Apellido'];?>">
    <br>
    <label for="Fecha_nacimiento">Fecha_nacimiento:</label>
    <input type="date" name="Fecha_nacimiento" value="<?php echo $row['Fecha_nacimiento'];?>">
    <br>
    <label for="Sexo">Sexo: </label>
    <input type="radio" name="Sexo" value="M"
    <?php echo $row['Sexo'] == 'M' ? 'checked': ''; ?>>Masculino
    <input type="radio" name="Sexo" value="F"
    <?php echo $row['Sexo'] == 'F' ? 'checked': '';?>>Femenino
    <br>
    <label for="Correo">Correo: </label>
    <input type="email" name="Correo" value="<?php echo $row['Correo'];?>">
    <br>
    <input type="hidden" name="id" value="<?php echo $row['id'];?>">

    <input type="submit" value="Guardar" class="btn btn-info "style="margin-top:8px;">
    </form>
  
`;
}
