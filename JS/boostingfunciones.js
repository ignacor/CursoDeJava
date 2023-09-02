const rangohierro = {
    rank: "Hierro",
    precio: 5,
}

const rangobronce = {
    rank: "Bronce",
    precio: 15,
}

const rangoplata = {
    rank: "Plata",
    precio: 25,
}

const rangooro = {
    rank: "Oro",
    precio: 45,
}

const rangoplatino = {
    rank: "Platino",
    precio: 55,
}

const rangodiamante = {
    rank: "Diamante",
    precio: 70,
}

const rangoascendente = {
    rank: "Ascendente",
    precio: 130,
}

const rangoinmortal = {
    rank: "Inmortal",
    precio: 200,
}

const rangoradiante = {
    rank: "Radiante",
    precio: 300,
}


let contador = 0;

var button = document.getElementById("boton-pagar");

// Boton Pagar //
function pagar() {
    if (contador > 0) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}


////////////////////////// // Funciones Calc // ////////////////////////
// Hierro // 
function hierro() {
    contador = contador + rangohierro.precio; document.querySelector("#precio").innerHTML = contador
    Toastify({

        text: `Usted selecciono el rango: ${rangohierro.rank}`,

        duration: 3000

    }).showToast();
    pagar()


}

// Bronce //

function bronce() {
    contador = contador + rangobronce.precio;
    document.querySelector("#precio").innerHTML = contador
    Toastify({

        text: `Usted selecciono el rango: ${rangobronce.rank}`,

        duration: 3000

    }).showToast();
    pagar()


}

// Plata //

function plata() {
    contador = contador + rangoplata.precio;
    document.querySelector("#precio").innerHTML = contador;
    Toastify({

        text: `Usted selecciono el rango: ${rangoplata.rank}`,

        duration: 3000

    }).showToast();
    pagar()

}

// Oro //
function oro() {
    contador = contador + rangooro.precio;
    document.querySelector("#precio").innerHTML = contador;
    Toastify({

        text: `Usted selecciono el rango: ${rangooro.rank}`,

        duration: 3000

    }).showToast();
    pagar()

}

// Platino //
function platino() {
    contador = contador + rangoplatino.precio;
    document.querySelector("#precio").innerHTML = contador;
    Toastify({

        text: `Usted selecciono el rango: ${rangoplatino.rank}`,

        duration: 3000

    }).showToast();
    pagar()

}
// Diamante //

function diamante() {
    contador = contador + rangodiamante.precio;
    document.querySelector("#precio").innerHTML = contador;
    Toastify({

        text: `Usted selecciono el rango: ${rangodiamante.rank}`,

        duration: 3000

    }).showToast();
    pagar()

}

// Ascentende //
function ascendente() {
    contador = contador + rangoascendente.precio;
    document.querySelector("#precio").innerHTML = contador;
    Toastify({

        text: `Usted selecciono el rango: ${rangoascendente.rank}`,

        duration: 3000

    }).showToast();
    pagar()

}

// Inmortal // 
function inmortal() {
    contador = contador + rangoinmortal.precio;
    document.querySelector("#precio").innerHTML = contador;
    Toastify({

        text: `Usted selecciono el rango: ${rangoinmortal.rank}`,

        duration: 3000

    }).showToast();
    pagar()

}

// Radiante //
function radiante() {
    contador = contador + rangoradiante.precio;
    document.querySelector("#precio").innerHTML = contador;
    Toastify({

        text: `Usted selecciono el rango: ${rangoradiante.rank}`,

        duration: 3000

    }).showToast();
    pagar()

}

// Eventos //

document.querySelector("#hierroxd").addEventListener("click", hierro);

//
document.querySelector("#broncexd").addEventListener("click", bronce);



//
document.querySelector("#plataxd").addEventListener("click", plata);



//
document.querySelector("#oroxd").addEventListener("click", oro);



//
document.querySelector("#platinoxd").addEventListener("click", platino);



//
document.querySelector("#diamantexd").addEventListener("click", diamante);



//
document.querySelector("#ascendentexd").addEventListener("click", ascendente);



document.querySelector("#inmortalxd").addEventListener("click", inmortal);

///
document.querySelector("#radiantexd").addEventListener("click", radiante);


///////////////////////////////
document.querySelector("#hierro1xd").addEventListener("click", hierro);


document.querySelector("#bronce1xd").addEventListener("click", bronce);


document.querySelector("#plata1xd").addEventListener("click", plata);

//
document.querySelector("#oro1xd").addEventListener("click", oro);

//
document.querySelector("#platino1xd").addEventListener("click", platino);

//
document.querySelector("#diamante1xd").addEventListener("click", diamante);

//
document.querySelector("#ascendente1xd").addEventListener("click", ascendente);

///
document.querySelector("#inmortal1xd").addEventListener("click", inmortal);

///
document.querySelector("#radiante1xd").addEventListener("click", radiante);




button.addEventListener("click",pagarxd)

function pagarxd (){

    location.href = '../paginas/tarjeta.html';


}
