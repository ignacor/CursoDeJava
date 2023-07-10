

let gmail = prompt("Escriba su Gmail para iniciar sesion")
let nombreCliente = prompt("Bienvenido a Xclusive, cual es su nombre?")
alert("Hola " + nombreCliente + " este es nuestro catalogo actualmente")
let compras = prompt("(3) Remera JapanCult  \n (5) Remera Clasic  \n (2) Musculosa GymEdition  \n (6) Remera Y2kEdition  \n (1) Pantalon JeanClasic \n (3) Medias Deportivas \n Escriba el nombre del producto si desea saber su precio y comprarlo. \nEscriba ESC si desea cancelar su compra.")
while (compras != "ESC") {
  switch (compras) {
    case "JapanCult":
    let japanCult = prompt("El valor de esta prenda es de $20 \n Desea comprarla? \n Si/No")
    switch (japanCult) {
        case "Si": alert("Gracias por su compra le enviaremos el seguimiento del paquete a " + gmail);
        break;
        case "No" : alert("Usted sera redireccionado a nuestro catalogo :)");
        break;
      }
      break;
    case "Clasic":
      let clasic = prompt("El valor de esta prenda es de $15 \n Desea comprarla? \n Si/No")
      switch (clasic) {
        case "Si": alert("Gracias por su compra le enviaremos el seguimiento del paquete a " + gmail);
        break;
        case "No": alert("Usted sera redireccionado a nuestro catalogo :)");
        break;
      }
      break;
    case "GymEdition":
      let gymEdition = prompt("El valor de esta prenda es de $16 \n Desea comprarla? \n Si/No")
      switch (gymEdition) {
        case "Si": alert("Gracias por su compra le enviaremos el seguimiento del paquete a " + gmail);
        break;
        case "No": alert("Usted sera redireccionado a nuestro catalogo :)");
        break;
      }
      break;
    case "Y2kEdition":
      let y2kEdition = prompt("El valor de esta prenda es de $30 \n Desea comprarla? \n Si/No")
      switch (y2kEdition) {
        case "Si": alert("Gracias por su compra le enviaremos el seguimiento del paquete a " + gmail);
        break;
        case "No": alert("Usted sera redireccionado a nuestro catalogo :)");alert("gil");
        break;
      }
      break;
    case "JeanClasic":
      let jeanClasic = prompt("El valor de esta prenda es de $35 \n Desea comprarla? \n Si/No")
      switch (jeanClasic) {
        case "Si": alert("Gracias por su compra le enviaremos el seguimiento del paquete a " + gmail);
        break;
        case "No": alert("Usted sera redireccionado a nuestro catalogo :)");
        break;
      }
      break;
    case "Deportivas":
      let deportivas = prompt("El valor de esta prenda es de $4 \n Desea comprarla? \n Si/No")
      switch (deportivas) {
        case "Si": alert("Gracias por su compra le enviaremos el seguimiento del paquete a " + gmail);
        break;
        case "No": alert("Usted sera redireccionado a nuestro catalogo :)");
        break;
      }
      break;
  }
  compras = prompt("(3) Remera JapanCult  \n (5) Remera Clasic  \n (2) Musculosa GymEdition  \n (6) Remera Y2kEdition  \n (1) Pantalon JeanClasic \n (3) Medias Deportivas \n Escriba el nombre del producto si desea saber su precio y comprarlo. \nEscriba ESC si desea cancelar su compra.");

}