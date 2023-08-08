const prendasDeRopa = [
  {
    nombre: "JapanCult",
    precio: 9000,
    color: "Negra",
  },
  {
    nombre: "Clasic",
    precio:  4500,
    color: "Azul",
  },
  {
    nombre: "GymEdition",
    precio: 6000,
    color: "Blanca",
  },
  {
    nombre: "Y2k",
    precio: 10000,
    color: "Negra",

  },
  {
    nombre: "Pantalon",
    precio: 6000,
    color: "Beige",

  },
  {
    nombre: "Medias",
    precio: 200,
    color: "Blancas",

  },
];

const nombres = prendasDeRopa.map( (model) => model.nombre )
console.log(nombres)



 

let gmail = prompt("Escriba su Gmail para iniciar sesion");
let nombreCliente = prompt("Bienvenido a Xclusive, cual es su nombre?");
alert("Hola " + nombreCliente + " este es nuestro catalogo actualmente");
function buscarProducto() {
  let nombreProducto = prompt(nombres + "\n Selecione el modelo que desea comprar")

  while (nombreProducto) {
    const productoEncontrado = prendasDeRopa.find(
      (prenda) => prenda.nombre === nombreProducto
    );

    if (productoEncontrado) {
      alert(
        `El producto ${productoEncontrado.nombre} tiene un precio de $ ${productoEncontrado.precio} y es de color ${productoEncontrado.color} `
      );

      const deseaComprar = confirm("¿Desea comprar este producto?");

      if (deseaComprar) {
        alert("Compra realizada con éxito le enviaremos el seguimiento del pedido a " + gmail);
      } else {
        alert("Compra cancelada");
      }

      break;
    } else {
      console.log(`El producto ${nombreProducto} no se encuentra disponible`);
      nombreProducto = prompt("Ingrese el nombre del producto");
    }
  }
}

buscarProducto();


const cuerpo = document.body
cuerpo.style.backgroundColor = 'red'