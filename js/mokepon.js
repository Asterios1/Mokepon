let ataqueJugador = "" 
let ataqueEnemigo = ""
//Funcion para iniciar el juego cuando el jugador le de click a la mascota
function iniciarJuego(){//funcion que realizar cuando se termine de cargar el html
    let botonMascotajugador = document.getElementById("botonMascotas") //creamos una variable y le indicamos al documento (html) que nos traiga lo que tenga el ID deseado
    botonMascotajugador.addEventListener("click",seleccionarMascotaJugador) // Escuchamos cuando se haga el evento "click", y con el segundo parametro le indicamos lo que queremos que haga (llamarla funcion)

    let botonAtaqueFuego = document.getElementById("botonFuego")
    botonAtaqueFuego.addEventListener("click",ataqueFuego)

    let botonAtaqueAgua = document.getElementById("botonAgua")
    botonAtaqueAgua.addEventListener("click",ataqueAgua)

    let botonAtaqueTierra = document.getElementById("botonTierra")
    botonAtaqueTierra.addEventListener("click",ataqueTierra)
}
//funcion para aleatorio
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)//formula para escoge un numero aleatorio entre un minimo y un maximo puede servir para luego
}
//Funcion para seleccionar la mascota del jugador
function seleccionarMascotaJugador(){//funcion para que el usuario escoja mascota
    
    //Definimos los inputs y almacenamos la etiqueta HTML que tenga el nombre que queremos por ID
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let inputLangostelvis = document.getElementById("Langostelvis")
    let inputTucapalma = document.getElementById("Tucapalma")
    let inputPydos = document.getElementById("Pydos")
    let spanMascotaJugador = document.getElementById("mascotaJugador")
    //Variable bandera
    let jugar = true
    

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
        jugar = false
        alert("No pos valista verga compadre")
    }

    //Llamamos la funcion para la mascota del enemigo
    if (jugar==true) {
        seleccionarMascotaEnemigo()
    }
    
}

function crearMensaje(resultado) {
    let  sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")//CreateElement nos sirve para crear un elemento o etiqueta html, la cual especificamos en los parentesis
    parrafo.innerHTML = "Tu mascota ataco con "+ataqueJugador+", la mascota del enemigo "+ataqueEnemigo+ "- "+resultado //al parrafo le introducimos la cadena que queremos mostrar

    sectionMensajes.appendChild(parrafo)//introducimos el parrafo dentro de la seccion de mensajes
}


function combate() {
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("Empate")
    } else if (ataqueJugador=="Fuego"&&ataqueEnemigo=="Tierra") {
        crearMensaje("Ganaste")
    } else if (ataqueJugador=="Agua"&&ataqueEnemigo=="Fuego") {
        crearMensaje("Ganaste")
    } else if (ataqueJugador=="Tierra"&&ataqueEnemigo=="Agua") {
        crearMensaje("Ganaste")
    } else {
        crearMensaje("Perdiste")
    }
}
//Funcion para seleccionar la mascota del enemigo
function seleccionarMascotaEnemigo(){

    let spanMascotaEnemigo = document.getElementById("mascotaEnemigo")
    //Llamamos a la funcion aleatorio y la almacenamos para darle al enemigo una mascota
    let mascotaAleatorio = aleatorio(1,6)
    //Realizamos un condicional para asignarle la mascota al enemigo
    if (mascotaAleatorio == 1) { 
        spanMascotaEnemigo.innerHTML="Hipodoge"//.innerHTML nos ayuda a poder ver o capturar el html que hay dentro de la etiqueta span, luego es solo cambiarlo 
    } else if(mascotaAleatorio == 2){//le pasamos el metodo checked para verificar que nuestro input de tipo radio este encendido o apagado y asi poder ver cual escogio el usuario
        spanMascotaEnemigo.innerHTML="Capipepo"
    } else if(mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML="Ratigueya"
    } else if(mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML="Langostelvis"
    } else if(mascotaAleatorio == 5){
        spanMascotaEnemigo.innerHTML="Tucapalma"
    } else if(mascotaAleatorio == 6){
        spanMascotaEnemigo.innerHTML="Pydos"
    }
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua"
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "Tierra"
    }

    combate()
}


function ataqueFuego(){
    ataqueJugador="Fuego"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador="Agua"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador="Tierra"
    ataqueAleatorioEnemigo()
}



window.addEventListener("load", iniciarJuego)//Creamos un nuevo evento para poder escuchar cuando el html se termine de cargar y poder activar el js