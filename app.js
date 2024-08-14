let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let NumeroMaximo = 10;

function TextoElementoAsignado(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt (document.getElementById("num").value);  
    if (numeroDeUsuario === numeroSecreto) {
            TextoElementoAsignado("p" , `Correcto ${numeroSecreto} es el número secreto. <br> <br> Acertaste el número secreto en ${intentos} ${(intentos === 1) ? "intento" : "intentos" }`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        } else {
            if (numeroDeUsuario > numeroSecreto) {
                TextoElementoAsignado("p" , "El número es menor");
            } else {
                TextoElementoAsignado("p" , "El numero es mayor");
            }

        }

        intentos++;
        limpiarCaja();
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#num")
    valorCaja.value = "";

}

function GenerateNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;  
        console.log (numeroGenerado);
        console.log (listaNumerosSorteados);
    if (listaNumerosSorteados.length == NumeroMaximo) { 

    } else { TextoElementoAsignado("p" , "Ya se sortearon todos los números posibles");

        // no explicaron porque cambiar la funcion generate numero secreto a cero en lugar de igual a numero secreto
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return GenerateNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;}
    }
}

function CondicionesIniciales(){
    TextoElementoAsignado ("h1" , "Juego del número secreto");
    TextoElementoAsignado ("p" , ` Indica un número del 1 al ${NumeroMaximo}`);
    numeroSecreto = GenerateNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
   // limpiar caja
   limpiarCaja();
   //Indicar mensajes descriptivos
   CondicionesIniciales();
   //generar el número aleatorio   
   // Deshabilitar el boton de nuevo juego
   // Inicializar el número de intentos
   document.querySelector("#reiniciar").setAttribute('disabled' , 'true');
   

}

CondicionesIniciales();




/* variable unica que despues se transformo en functon textoelemento
let parrafo = document.querySelector("p")
parrafo.innerHTML = "indica un número del 1 al 10" */
