

function Ropa (clase,modelo,talle,color,precio){
  this.clase = clase
  this.modelo = modelo
  this.talle = talle
  this.color = color
  this.precio = precio
}
const jpC = new Ropa ("Remera","JapanCult","Xl","Negra","$55")
const clS = new Ropa ("Remera","Clasic","M","Azul","$25")
const gyE = new Ropa ("Musculosa","GymEdition","L","Blanca","$35")
const y2K = new Ropa ("Remera","Y2K","Xxl","Negra y Roja","$85")
const jeC = new Ropa ("Pantalon","Jean Clasico","42","Beige","$45")
const meD = new Ropa ("Medias","Deportivas","S","Negra","$5");


function sicompra(){
  alert("Gracias por su compra le enviaremos el seguimiento del paquete a " + gmail);
}

function nocompra(){
  alert("Usted sera redireccionado a nuestro catalogo :)")
}


function japanCult (){
  let japC = prompt( jpC.clase + "\n " + jpC.modelo + "\n " + jpC.talle + "\n" + jpC.color + "\n" + jpC.precio + "\n Desea comprarla? \n Si/No "   )
   while(japC != "ESC"){
     switch(japC){
       case "Si" : sicompra()
       break;
       case "No" : nocompra()
       break;
     }
     break;
   }
   
 }
 function Clasic (){
  let cllS = prompt( jpC.clase + "\n " + clS.modelo + "\n " + clS.talle + "\n" + clS.color + "\n" + clS.precio + "\n Desea comprarla? \n Si/No "   )
   while(cllS != "ESC"){
     switch(clls){
       case "Si" : sicompra()
       break;
       case "No" : nocompra()
       break;
     }
     break;
   }
  }
 function gymEdition (){
  let gymE = prompt( gyE.clase + "\n " + gyE.modelo + "\n " + gyE.talle + "\n" + gyE.color + "\n" + gyE.precio + "\n Desea comprarla? \n Si/No "   )
   while(gymE != "ESC"){
     switch(gymE){
       case "Si" : sicompra()
       break;
       case "No" : nocompra()
       break;
     }
     break;
   }
   
 }
 function Y2kEdition (){
  let y2kE = prompt( y2K.clase + "\n " + y2K.modelo + "\n " + y2K.talle + "\n" + y2K.color + "\n" + y2K.precio + "\n Desea comprarla? \n Si/No "   )
   while(y2kE != "ESC"){
     switch(y2kE){
       case "Si" : sicompra()
       break;
       case "No" : nocompra()
       break;
     }
     break;
   }
   
 }
 
 function jeanClasic (){
  let jenC = prompt( jeC.clase + "\n " + jeC.modelo + "\n " + jeC.talle + "\n" + jeC.color + "\n" + jeC.precio + "\n Desea comprarla? \n Si/No "   )
   while(jenC != "ESC"){
     switch(jenC){
       case "Si" : sicompra()
       break;
       case "No" : nocompra()
       break;
     }
     break;
   }
   
 }
 function mediasDeportivas (){
  let medS = prompt( meD.clase + "\n " + meD.modelo + "\n " + meD.talle + "\n" + meD.color + "\n" + meD.precio + "\n Desea comprarla? \n Si/No "   )
   while(medS != "ESC"){
     switch(medS){
       case "Si" : sicompra()
       break;
       case "No" : nocompra()
       break;
     }
     break;
   }
   
 }


let gmail = prompt("Escriba su Gmail para iniciar sesion");
let nombreCliente = prompt("Bienvenido a Xclusive, cual es su nombre?");
alert("Hola " + nombreCliente + " este es nuestro catalogo actualmente");
let compras = prompt("(3) Remera JapanCult  \n (5) Remera Clasic  \n (2) Musculosa GymEdition  \n (6) Remera Y2kEdition  \n (1) Pantalon JeanClasic \n (3) Medias Deportivas \n Escriba el nombre del producto si desea saber su precio y comprarlo. \nEscriba ESC si desea cancelar su compra.")
while (compras != "ESC") {
  switch (compras) {
    case "JapanCult":
    japanCult() 
      break;
    case "Clasic":
      Clasic ()
      break;
    case "GymEdition":
    gymEdition()
      break;
    case "Y2kEdition":
    Y2kEdition()
      break;
    case "JeanClasic":
    jeanClasic()
      break;
    case "Deportivas":
    mediasDeportivas()
      break;
  }
  compras = prompt("(3) Remera JapanCult  \n (5) Remera Clasic  \n (2) Musculosa GymEdition  \n (6) Remera Y2kEdition  \n (1) Pantalon JeanClasic \n (3) Medias Deportivas \n Escriba el nombre del producto si desea saber su precio y comprarlo. \nEscriba ESC si desea cancelar su compra.");

}


const cuerpo = document.body
cuerpo.style.backgroundColor = 'red'