/* Para obtener los valores de los Inputs, creé un evento para el botón de verificar que desarrolle la siguiente función */

document.getElementById("verificar").addEventListener("click", function() {

/* se guardan en una constante los datos entregados en los inputs */

const sticker1 = document.getElementById("sticker1").value;
const sticker2 = document.getElementById("sticker2").value;
const sticker3 = document.getElementById("sticker3").value;

/* Suma de stickers utilizando Number para definir números y así no tener problemas en la sumatoria */

let total = Number(sticker1) + Number(sticker2) + Number(sticker3);

/* Lo siguiente muestra el texto solicitado, dependiendo del número total de stickers.
Por ejemplo, si lleva <= 10 se concatenará el texto con el total para dar la respuesta */

const cantidad = document.getElementById("resultado");

if (total == 0){
    cantidad.innerHTML = 'Selecciona la cantidad de Stickers';
} else if (total <=10){
    cantidad.innerHTML = 'Llevas ' + total + ' stickers.';
} else {
    cantidad.innerHTML = 'Llevas demasiados stickers.';
}

})





