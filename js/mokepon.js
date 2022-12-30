function iniciarJuego(){//funcion que realizar cuando se termine de cargar el html
    let botonMascotajugador = document.getElementById("botonMascotas") //creamos una variable y le indicamos al documento (html) que nos traiga lo que tenga el ID deseado
    botonMascotajugador.addEventListener("click",seleccionarMascotaJugador) // Escuchamos cuando se haga el evento "click", y con el segundo parametro le indicamos lo que queremos que haga (llamarla funcion)
}
function seleccionarMascotaJugador(){//funcion para que el usuario escoja mascota
    
    //Definimos los inputs y almacenamos la etiqueta HTML que tenga el nombre que queremos por ID
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let inputLangostelvis = document.getElementById("Langostelvis")
    let inputTucapalma = document.getElementById("Tucapalma")
    let inputPydos = document.getElementById("Pydos")
    let spanMascotaJugador = document.getElementById("mascotaJugador")
    let spanMascotaEnemigo = document.getElementById("mascotaEnemigo")

    //Realizamos el proceso de seleccion de mascota, revisamos uno por uno de los botones cual esta encendido y cual no para poder saberlo
    if (inputHipodoge.checked == true) { 
        spanMascotaJugador.innerHTML="Hipodoge"//.innerHTML nos ayuda a poder ver o capturar el html que hay dentro de la etiqueta span, luego es solo cambiarlo 
    } else if(inputCapipepo.checked == true){//le pasamos el metodo checked para verificar que nuestro input de tipo radio este encendido o apagado y asi poder ver cual escogio el usuario
        spanMascotaJugador.innerHTML="Capipepo"
    } else if(inputRatigueya.checked == true){
        spanMascotaJugador.innerHTML="Ratigueya"
    } else if(inputLangostelvis.checked == true){
        spanMascotaJugador.innerHTML="Langostelvis"
    } else if(inputTucapalma.checked == true){
        spanMascotaJugador.innerHTML="Tucapalma"
    } else if(inputPydos.checked == true){
        spanMascotaJugador.innerHTML="Pydos"
    } else {
        alert("No pos valista verga compadre")
    }

}



window.addEventListener("load", iniciarJuego)//Creamos un nuevo evento para poder escuchar cuando el html se termine de cargar y poder activar el js