const ipnameper = document.getElementById("inputnombre")
const ipmailper = document.getElementById("inputmail")
const ipdirecc = document.getElementById("inputdireccion")
const iptarjeta = document.getElementById("inputarjeta")
const iptit = document.getElementById("inputtit")
const ipcvv = document.getElementById("inputcvv")
const ipdesde = document.getElementById("inputdesde")
const inhasta = document.getElementById("inputhasta")
const botonpagar = document.getElementById("btnpagar")




botonpagar.addEventListener('click',formlleno);
function formlleno(e){
    e.preventDefault();

    if((ipnameper.value && ipmailper.value && ipdirecc.value && iptarjeta.value && iptit.value && ipcvv.value && ipdesde.value && inhasta.value  ) === '' ){
        Swal.fire({
            icon: 'error',
            title: 'Vaya!',
            text: 'Todas las casillas deben estar completas.',
          })

    }
    else{
        let timerInterval
        Swal.fire({
          title: 'Comprobando informacion,espera un minuto',
          html: '<b></b> Milisengudos restantes.',
          timer: 2000,
          timerProgressBar: true,
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
        
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
     
        setTimeout(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Muchas gracias por tu compra ${ipnameper.value } `,
                html: `Te enviaremos un mail a : ${ipmailper.value } cuando tu servicio haya finalizado con exito `,
                showConfirmButton: false,
                timer: 10000,
                background :'#222222',
                iconColor : 'green',
                color : 'white',
              })
                 }, 2350)
            }
        
    
};
