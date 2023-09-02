let ipname = document.getElementById("inpname")
let ipmail = document.getElementById("inpemail")
let txtmesage = document.getElementById("txtmesage")

let botonenviar = document.getElementById("btnsend")

boton.addEventListener('click',formulleno);
function formulleno(e){
    e.preventDefault();

    if((ipname.value && ipmail.value  && txtmesage.value ) === ''){
        Swal.fire({
            icon: 'error',
            title: 'Vaya!',
            text: 'Todos los campos deben estan rellenos!',
            background :'#222222',
            iconColor : 'd20c0c',
            color : 'white',
          })

    }
    else{
        let timerInterval
Swal.fire({
  title: 'Comprando informacion...',
  html: 'Tiempo restante : <b></b>',
  timer: 2000,
  timerProgressBar: true,
  background :'#222222',
iconColor : 'd20c0c',
color : 'white',
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
setTimeout(() => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu mensage fue enviado con exito,gracias por tu tiempo!',
        showConfirmButton: false,
        timer: 1500,
        background :'#222222',
        iconColor : 'green',
        color : 'white',
      })
         }, 2350)
    }
};





