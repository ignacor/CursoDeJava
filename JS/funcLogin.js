





// variables//
let nom = document.getElementById("innombre")
let mail = document.getElementById("incorreo")
let pass = document.getElementById("incontraseña")
let nombreax = document.getElementById("nombreinput")
let formu = document.getElementById("formu")
let bienvenida = document.getElementById("boton")
let registro = document.getElementById("signUp");
let log = document.getElementById("signIn");
let nameImput = document.getElementById("nameInput");
let title = document.getElementById("title");


/////////////////////////////////////


log.onclick = function() {
    nameImput.style.maxHeight = "0";
    title.innerHtml = "Inicia Sesion";
    log.classList.add("disable");
    registro.classList.remove("disable");   
}
registro.onclick = function() {
    nameImput.style.maxHeight = "60px";
    title.innerHtml = "Registro";
    log.classList.remove("disable");
    registro.classList.add("disable");   
}

// Arrays //
const aUsuarios = [];
const aMails = [];
const  aPasswords = [];

// Registrar cuentas en LcStorage //

registro.addEventListener('click',datosst);
function datosst(){

let nomst = nom.value
let mailst = mail.value
let passt = pass.value

aUsuarios.push(nomst)
aMails.push(mailst)
aPasswords.push(passt)

localStorage.setItem('usuariosCreados', JSON.stringify(aUsuarios))
localStorage.setItem('mailsCreados', JSON.stringify(aMails))
localStorage.setItem('contraseñasCreadas', JSON.stringify(aPasswords))

console.log(aUsuarios)
console.log(aMails)
console.log(aPasswords)

};

// Funcion para mostrar cuentas nuevas //



const cuentascont= document.getElementById('cuentas-cont')
registro.addEventListener('click',cuentasxd);
function cuentasxd(){
for (const i = 0 ; i< aUsuarios.length ; i++){
    const cuentas = document.createElement('div')
        cuentas.innerHTML = `
        <div class="card" style="width: 250px; height: 250px; flex-direction : column ; background-color : #222222; margin: 10px ;">
                <h1 style=" display:flex; color:white; align-text: center; " >${aUsuarios}</h1>
                <p  style=" align-text: center; " >${aMails}</p>
                <p style=" align-text: center; " > ${aPasswords}</p>
            </div>     
        </div>       
        `
       cuentascont.append(cuentas)
}

}












// Evento de Login //
log.addEventListener('click',formlleno);
function formlleno(e){
    e.preventDefault();

    if((mail.value && pass.value ) === '' ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos deben estar completos!',
            background : '#222222',
            iconColor : '#d20c0c',
            color : 'white',
            position: 'top',

          })

    }
    else{
       
        location.href = '../index.html';
    }
};
















