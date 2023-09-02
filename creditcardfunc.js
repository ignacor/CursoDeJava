const ipnameper = document.getElementById("inputnombre")
const ipmailper = document.getElementById("inputmail")
const iptarjeta = document.getElementById("inputarjeta")
const iptit = document.getElementById("inputtit")
const ipcvv = document.getElementById("inputcvv")
const ipdesde = document.getElementById("inputdesde")
const inhasta = document.getElementById("inputhasta")
const botonpagar = document.getElementById("btnpagar")


botonpagar.addEventListener('click',formlleno);
function formlleno(e){
    e.preventDefault();

    if((ipnameper.value  && ipmailper.value  && iptarjeta.value  && iptit.value && ipcvv.value && ipdesde.value && inputhasta.value ) === '' ){
        Swal.fire({
            icon: 'error',
            title: 'Vaya!',
            text: 'Todas las casillas deben estar completas.',
            background : 'rgb(69,60,60)',
            background : 'radial-gradient(circle, rgba(69,60,60,1) 0%, rgba(0,0,0,1) 70%)',
            color: 'white',
            iconColor : 'd20c0c',
          })

    }
    else{
        let timerInterval
        Swal.fire({
          title: 'Comprobando informacion,espera un minuto',
          html: '<b></b> Milisengudos restantes.',
          timer: 2000,
          timerProgressBar: true,
          color : 'wheat',
          background : 'rgb(69,60,60)',
          background : 'radial-gradient(circle, rgba(69,60,60,1) 0%, rgba(0,0,0,1) 70%)',
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
                background : 'rgb(69,60,60)',
                 background : 'radial-gradient(circle, rgba(69,60,60,1) 0%, rgba(0,0,0,1) 70%)',
                iconColor : 'green',
                color : 'white',
              })
                 }, 2350)
            }
        
    
};

/// Api del Dolar
fetch("https://api.bluelytics.com.ar/v2/latest")
    .then((res) => res.json())
    .then((data) => {
        const dolar = d.getElementById('dolarvalor')
       dolarValue = data.blue;
       dolar.innerHTML =
            `<h2 style="color:wheat; font-size: 15px;" >VALORANT BOOSTING cotiza en dolares,consulta su precio actual aqui:</h4>
            <h5 style="color:wheat; font-size: 15px;" >Valor de Compra: $ ${dolarValue.value_avg}.- (ARS)</h5>            
           <h5 style="color:wheat; font-size: 15px;">Valor de Venta: $ ${dolarValue.value_buy}.- (ARS)</h5>   
                 
            `
    })
   .catch((error) => dolar.innerHTML = `<h5>${error}</h5>`)
