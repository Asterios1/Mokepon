function iniciarJuego(){//funcion que realizar cuando se termine de cargar el html
    let botonMascotajugador = document.getElementById("botonMascotas") //creamos una variable y le indicamos al documento (html) que nos traiga lo que tenga el ID deseado
    botonMascotajugador.addEventListener("click",seleccionarMascotaJugador) // Escuchamos cuando se haga el evento "click", y con el segundo parametro le indicamos lo que queremos que haga (llamarla funcion)
}
function seleccionarMascotaJugador(){//funcion para que el usuario escoja mascota
    
    //Definimos los inputs y almacenamos el evento 
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let inputLangostelvis = document.getElementById("Langostelvis")
    let inputTucapalma = document.getElementById("Tucapalma")
    let inputPydos = document.getElementById("Pydos")


    if (inputHipodoge.checked == true) { 
        alert("Escogiste a Hipodoge")
    } else if(inputCapipepo.checked == true){//le pasamos el metodo checked para verificar que nuestro input de tipo radio este encendido o apagado y asi poder ver cual escogio el usuario
        alert("Escogiste a Capipepo")
    } else if(inputRatigueya.checked == true){
        alert("Escogiste a Ratigueya")
    } else if(inputLangostelvis.checked == true){
        alert("Escogiste a Langostelvis")
    } else if(inputTucapalma.checked == true){
        alert("Escogiste a Tucapalma")
    } else if(inputPydos.checked == true){
        alert("Escogiste a Pydos")
    } else {
        alert("No pos valista verga compadre")
    }
}



window.addEventListener("load", iniciarJuego)//Creamos un nuevo evento para poder escuchar cuando el html se termine de cargar y poder activar el js