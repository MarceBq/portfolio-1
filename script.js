const buttonDescargar = document.querySelector("descargar");

let menuVisible = false;

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

function descargarPDF() {
    // Crear un elemento <a> para la descarga
    const downloadInstance = document.createElement("a");
    
    // Establecer la URL del archivo PDF
    downloadInstance.href = "https://marcebq.github.io/portfolio-1/CV_BARRIENTOS_QUISPE_MARCELO.pdf";
    
    // Especificar que se abra en una nueva pestaña
    downloadInstance.target = "_blank";
    
    // Especificar el nombre del archivo para descargar
    downloadInstance.download = "CV_BARRIENTOS_QUISPE_MARCELO.pdf";

    // Simular un clic en el enlace para iniciar la descarga
    downloadInstance.click();
    
    // Eliminar el elemento <a> después de la descarga
    downloadInstance.remove();
}

  
window.onscroll = function () {
  efectoHabilidades();
};
