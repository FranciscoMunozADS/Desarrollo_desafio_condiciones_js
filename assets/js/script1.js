/* creo la variable de la imagen por id */

let btnborde = document.getElementById("foto");

/* función donde se determina si la imágen tiene o no borde */
/* se comprueba el borde mediante el (btnborde.style.border), si esta vacío sera false, de lo contrario, true */
/* si es true, se le aplicará la doble '' para establecerlo como cadena vacia, es decir que el navegador volverá a aplicar el estilo predeterminado (sin borde) */
/* si es false, se le aplicara el borde descrito en 'else' */

function toggleborder() {
    if (btnborde.style.border) {
        btnborde.style.border = '';
    } else {
        btnborde.style.border = "2px solid red"
    }
}

/* creé un evento con un 'click' donde la funcion entre () se ejecutará con cada click */

btnborde.addEventListener("click", (toggleborder))