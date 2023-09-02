const d = document
const c = d.body
c.style.backgroundColor = '#222222'
c.style.display = 'flex'
c.style.justifyContent = 'center'
c.style.alignItems = 'center'
// CONTENEDOR//
const contenedor = d.createElement('div')
contenedor.style.backgroundColor = 'black'
contenedor.style.width = '70%'
contenedor.style.height = '90%'
contenedor.style.borderRadius = '20px'
contenedor.style.display = 'flex'
contenedor.style.justifyContent = 'center'
contenedor.style.alignItems = 'center'
c.append(contenedor)
// FORMULARIO DE DATOS PERSONALES //
const formudatospers = d.createElement('form')
formudatospers.style.backgroundColor = 'rgb(15, 15, 15)'
formudatospers.style.width = '30%'
formudatospers.style.height = '80%'
formudatospers.style.marginLeft = '5px'
formudatospers.style.borderRadius = '25px'

contenedor.append(formudatospers)

const h1formpers = d.createElement('h1')
h1formpers .innerHTML = 'Complete sus datos Personales.'
h1formpers .style.color = '#d20c0c'
h1formpers .style.textAlign = 'center'
formudatospers.append(h1formpers )

//Nombre Completo //

const divname = d.createElement('div')
formudatospers.append(divname)

const labelnombre = d.createElement('label')
labelnombre.innerText = 'Nombre Completo'
labelnombre.style.color = 'wheat'
labelnombre.style.fontSize = '25px'
divname.append(labelnombre)

const inputname = d.createElement('input')
inputname.type = 'text'
inputname.style.width = '90%'
inputname.style.height = '5%'
inputname.style.borderRadius = '15px'
inputname.style.backgroundColor = '#222222'
inputname.id = 'inputnombre'
divname.append(inputname)

// Email //

const divmail = d.createElement('div')
formudatospers.append(divmail)

const labelmail = d.createElement('label')
labelmail.innerText = 'Correo Electronico'
labelmail.style.color = 'wheat'
labelmail.style.fontSize = '25px'
divname.append(labelmail)

const inputmail = d.createElement('input')
inputmail.type = 'text'
inputmail.style.width = '90%'
inputmail.style.height = '5%'
inputmail.style.borderRadius = '15px'
inputmail.style.backgroundColor = '#222222'
inputmail.id = 'inputmail'
divmail.append(inputmail)

// Direccion //

const divdireccion = d.createElement('div')
formudatospers.append(divdireccion)

const labeldireccion = d.createElement('label')
labeldireccion.innerText = 'Direccion'
labeldireccion.style.color = 'wheat'
labeldireccion.style.fontSize = '25px'
divdireccion.append(labeldireccion)

const inputdireccion = d.createElement('input')
inputdireccion.type = 'text'
inputdireccion.style.width = '90%'
inputdireccion.style.height = '5%'
inputdireccion.style.borderRadius = '15px'
inputdireccion.style.backgroundColor = '#222222'
inputdireccion.id = 'inputdireccion'
divdireccion.append(inputdireccion)

//Boton de pagar //

const divbtn = d.createElement('div')
formudatospers.append(divbtn)

const btnpagar = d.createElement('input')
btnpagar.style.width = '50%'
btnpagar.style.height = '5%'
btnpagar.style.margin = '25%'
btnpagar.type = 'button'
btnpagar.value = 'Pagar'
btnpagar.style.borderRadius = '15px'
btnpagar.style.backgroundColor = 'rgb(69,60,60)'
btnpagar.id = 'btnpagar'
divbtn.append(btnpagar)








//Tarjeta//

const formutarjeta = d.createElement('form')
formutarjeta.style.backgroundColor = 'rgb(15, 15, 15)'
formutarjeta.style.width = '60%'
formutarjeta.style.height = '80%'
formutarjeta.style.marginLeft = '5px'
formutarjeta.style.borderRadius = '25px'
contenedor.append(formutarjeta)

const h1formtarjeta = d.createElement('h1')
h1formtarjeta.innerHTML = 'Complete los datos de la tarjeta.'
h1formtarjeta.style.color = '#d20c0c'
h1formtarjeta.style.textAlign = 'center'
formutarjeta.append(h1formtarjeta)

 // Cont Tarjeta
const conttarjeta = d.createElement('div')
conttarjeta.style.width = '75%'
conttarjeta.style.height = '45%'
conttarjeta.style.background = 'rgb(69,60,60)'
conttarjeta.style.background = 'radial-gradient(circle, rgba(69,60,60,1) 0%, rgba(0,0,0,1) 70%)'
conttarjeta.style.marginTop = '20%'
conttarjeta.style.marginLeft= '20%'
conttarjeta.style.borderRadius = '20px'
conttarjeta.style.display = 'flex'
conttarjeta.style.justifyContent = 'center'
conttarjeta.style.alignItems = 'center'
formutarjeta.append(conttarjeta)

// img //
const imgchip = d.createElement('img')
imgchip.src = '../imagenes/chip.png'
imgchip.style.width = '3%'
imgchip.style.marginBottom = '180px'
imgchip.style.marginLeft = '400px'
imgchip.style.position = 'fixed'
conttarjeta.append(imgchip)
//Lado IZQ//
const divizq = d.createElement('div')
divizq.style.marginLeft = '15px'
conttarjeta.append(divizq)

//Num Tarjeta //
const divnum = d.createElement('div')
divnum.style.flexDirection = 'column'
divizq.append(divnum)

const labeltarj = d.createElement('h3')
labeltarj.innerText = 'Numero de Tarjeta'
labeltarj.style.color = 'wheat'
divnum.append(labeltarj)

const inputarjeta = d.createElement('input')
inputarjeta.type = 'text'
inputarjeta.style.borderTop = 'none'
inputarjeta.style.borderLeft = 'none'
inputarjeta.style.borderRight = 'none'
inputarjeta.style.background = 'rgb(69,60,60)'
inputarjeta.maxLength = '19'
inputarjeta.id = 'inputarjeta'
divnum.append(inputarjeta)

//Titular Tarjeta //
const divtit = d.createElement('div')
divtit.style.flexDirection = 'column'
divizq.append(divtit)

const h3tit = d.createElement('h3')
h3tit.innerText = 'Nombre Titular de la Tarjeta'
h3tit.style.color = 'wheat'
divtit.append(h3tit)

const inputit = d.createElement('input')
inputit.type = 'text'
inputit.style.borderTop = 'none'
inputit.style.borderLeft = 'none'
inputit.style.borderRight = 'none'
inputit.style.background = 'rgb(69,60,60)'
inputit.id = 'inputtit'
divtit.append(inputit)

//CVV Tarjeta//
const divcvv = d.createElement('div')
divcvv.style.flexDirection = 'column'
divizq.append(divcvv)

const h3cvv = d.createElement('h3')
h3cvv.innerText = 'CVV'
h3cvv.style.color = 'wheat'
divcvv.append(h3cvv)

const inpucvv = d.createElement('input')
inpucvv.type = 'text'
inpucvv.style.borderTop = 'none'
inpucvv.style.borderLeft = 'none'
inpucvv.style.borderRight = 'none'
inpucvv.style.background = 'rgb(69,60,60)'
inpucvv.maxLength = '3'
inpucvv.id = 'inputcvv'
divcvv.append(inpucvv)

//Lado Der //

const divder= d.createElement('div')
divder.style.marginLeft = '80px'
divder.style.display = 'flex'
divder.style.justifyContent = 'center'
divder.style.alignItems = 'center'
conttarjeta.append(divder)

// Desde //
const divdesde = d.createElement('div')
divder.append(divdesde)

const h1desde = d.createElement('h3')
h1desde.innerText = 'Desde'
h1desde.style.color = 'wheat'
divdesde.append(h1desde)

const inputdesde = d.createElement('input')
inputdesde.type = 'text'
inputdesde.style.width = '30%'
inputdesde.style.borderTop = 'none'
inputdesde.style.borderLeft = 'none'
inputdesde.style.borderRight = 'none'
inputdesde.style.background = 'rgb(69,60,60)'
inputdesde.maxLength = '5'
inputdesde.id = 'inputdesde'
divdesde.append(inputdesde)

// Hasta //
const divhasta = d.createElement('div')
divder.append(divhasta)

const h1hasta = d.createElement('h3')
h1hasta.innerText = 'hasta'
h1hasta.style.color = 'wheat'
divhasta.append(h1hasta)

const inputhasta = d.createElement('input')
inputhasta.type = 'text'
inputhasta.style.width = '30%'
inputhasta.style.borderLeft = 'none'
inputhasta.style.borderRight = 'none'
inputhasta.style.background = 'rgb(69,60,60)'
inputhasta.maxLength = '5'
inputhasta.id = 'inputhasta'
divhasta.append(inputhasta)