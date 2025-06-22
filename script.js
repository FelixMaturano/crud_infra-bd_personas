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

function openModal(){
    modal.style.display = "block";
}

function cargarContenido(abrir) {
  var contenedor;
  contenedor = document.getElementById("contenido");
  fetch(abrir)
    .then((response) => response.text())
    .then((data) => (contenedor.innerHTML = data));
}

function iniciarSesion(){
  var url = `formlogin.html`;
  fetch(url)
    .then((response)=>response.text())
    .then((data)=>{
      document.querySelector("#titulo-modal").innerHTML = "Login"
      document.querySelector("#contenido-modal").innerHTML = data
      document.getElementById("myModal").style.display = "block";
    })
}

function editar(id){
  var url = `formeditar.php?id=${id}`;
  fetch(url)
    .then((response)=>response.text())
    .then((data)=>{
      document.querySelector("#titulo-modal").innerHTML = "Editar"
      document.querySelector("#contenido-modal").innerHTML = data
      document.getElementById("myModal").style.display = "block";
    });
}

// function guardarEditar(){
//     var datos = new FormData(document.querySelector('#form-edit'));

//     fetch("edit.php",{method: "POST", body: datos})
//         .then((response)=> response.text())
//         .then((data)=>{
//             document.querySelector('#titulo-modal').innerHTML = "Mensaje"
//             document.querySelector('#contenido-modal').innerHTML = data;
//             //mostar();
//         });
// }

function guardarEditar(){
    var datos = new FormData(document.querySelector('#form-edit'));
    
    fetch("edit1.php", {
        method: "POST", 
        body: datos
    })
    .then((response) => response.text())
    .then((data) => {
        if(data.success) {
            document.querySelector('#titulo-modal').innerHTML = "Éxito";
            document.querySelector('#contenido-modal').innerHTML = data;
            
            setTimeout(() => {
                modal.style.display = "none";
                cargarContenido('read.php');
            }, 1500);
        } else {
            document.querySelector('#titulo-modal').innerHTML = "Error";
            document.querySelector('#contenido-modal').innerHTML = data.message;
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        document.querySelector('#contenido-modal').innerHTML = "Error en la conexión";
    });
}