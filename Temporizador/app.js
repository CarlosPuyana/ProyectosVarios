
let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalID

function cogerValores() {

    clearInterval(intervalID)

    horas = document.getElementById("hora").value   

    minutos = document.getElementById("minuto").value   
    segundos = document.getElementById("segundo").value 

    if (minutos == null) {
       minutos = 0
    } else if (segundos == null) {
       segundos = 0
    } else if (minutos == "" && segundos == "") {
        minutos = parseInt(document.getElementById("minutos").getAttribute("data-value"))
        segundos = parseInt(document.getElementById("segundos").getAttribute("data-value"))

        console.log(document.getElementById("minutos").getAttribute("data-value"))
    }

    document.getElementById("hora").value = "";
    document.getElementById("minuto").value = "";
    document.getElementById("segundo").value = "";


    // Ejecutamos cada segundo
    intervalID = setInterval(cargarSegundo, 1000)


}

minutos = parseInt(minutos)

//Definimos y ejecutamos los segundos
function cargarSegundo() {
    let txtSegundos

    if (segundos < 0) {
        segundos = 59
    }

    // Mostramos los segundos en pantalla
    if (segundos < 10) {
        txtSegundos = `0${segundos}`
    } else {
        txtSegundos = segundos
    }

    document.getElementById('segundos').innerHTML = txtSegundos;
    
    document.getElementById('segundos').setAttribute("data-value", txtSegundos)
    segundos --

    cargarMinutos(segundos)

}

//Definimos y ejecutamos los minutos
function cargarMinutos(segundos) {
    let txtMinutos

    if (segundos == -1 && minutos != 0) {
        setTimeout(()=> {
            minutos--
        }, 500)
    } else if (segundos == -1 && minutos == 0) {
        setTimeout(() => {
            minutos = 0
        }, 500)
    }

    // Mostramos los minutos en pantalla
    if (minutos < 10) {
        txtMinutos = `0${minutos}`
    } else {
        txtMinutos = minutos
    }

    document.getElementById('minutos').innerHTML = txtMinutos
    document.getElementById('minutos').setAttribute("data-value", txtMinutos)

    cargarHoras(segundos, minutos)
}

// definimos y ejecutamos las horas
function cargarHoras(segundos, minutos) {
    let txtHoras

if (segundos == -1 && minutos == 0 && horas != 0) {
    setTimeout(() => {
        horas--
    }, 500)
} else if (segundos == -1 && minutos == 0 && horas == 0) {
    setTimeout(() => {
        horas = 0
    }, 500)
}

// Mostramos las horas en pantalla

if (horas < 10) {
    txtHoras = `0${horas}`
} else {
    txtHoras = horas
}

document.getElementById('horas').innerHTML = txtHoras

document.getElementById('horas').setAttribute("data-value", txtHoras)


}




function pausarContador() {

    let diasPaus = document.getElementById("dias").getAttribute("data-value")
    let horasPaus = document.getElementById("horas").getAttribute("data-value")
    let minutosPaus = document.getElementById("minutos").getAttribute("data-value")
    let segundosPaus = document.getElementById("segundos").getAttribute("data-value")

    clearInterval(intervalID)


}


function editar() {

    document.getElementById("contenedorInputs").style.visibility = "visible";
    
    document.getElementById("editar").style.visibility = "hidden";

    document.getElementById("closeEditar").style.visibility = "visible";

}

function closaita() {

    console.log("ajam")
    document.getElementById("contenedorInputs").style.visibility = "hidden";
    
    document.getElementById("editar").style.visibility = "visible";

    document.getElementById("closeEditar").style.visibility = "hidden";
}