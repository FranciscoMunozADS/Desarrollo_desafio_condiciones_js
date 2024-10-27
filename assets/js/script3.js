/* Mediante un evento de 'click' en el botón se efectuará la siguiente función */

document.getElementById("verificar").addEventListener("click", function() {

/* variables de los datos entregados por el select */

   let valor1 = document.getElementById("select1").value
   let valor2 = document.getElementById("select2").value
   let valor3 = document.getElementById("select3").value

/* suma de valores (sin Number, ya que no se requieren operaciones matemáticas) */

    let password = valor1 + valor2 + valor3

/* Dependiendo del resultado obtenido, se generan estas tres situaciones donde cambiará el mensaje final según corresponda */

    let ratificar = document.getElementById("resultado")

    if(password == 911){
        ratificar.innerHTML = "Password 1 correcto"
    } else if (password == 714){
        ratificar.innerHTML = "Password 2 correcto"
    } else {
        ratificar.innerHTML = "Password incorrecto"
    }

})