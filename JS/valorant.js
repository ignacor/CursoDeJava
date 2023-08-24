const cuerpo = document.body
cuerpo.style.backgroundColor = 'black'


const contboosting = document.createElement('div')
contboosting.style.backgroundColor = 'rgb(15, 15, 15)'
contboosting.style.width = '1500px'
contboosting.style.height = '500px'
contboosting.style.borderRadius = '30px'
contboosting.style.marginTop = '200px'
contboosting.style.marginLeft = '200px'
 cuerpo.prepend(contboosting)
const h1rango = document.createElement('h1')
h1rango.innerText = 'Rango Actual...................................................................................Rango Deseado'
h1rango.style.display = 'flex'
h1rango.style.justifyContent = 'center'
contboosting.prepend(h1rango)

const contrangos = document.createElement('div')
contrangos.style.display = 'flex'
contrangos.style.justifyContent = 'center'
contrangos.style.width = '100%'
contrangos.style.height = '80%'
contrangos.style.backgroundColor = '#222222'
contrangos.style.borderRadius = '30px'
contboosting.appendChild(contrangos)

const rangoactual = document.createElement('div')
rangoactual.style.width = '50%'
rangoactual.style.height = '90%'
rangoactual.style.backgroundColor = '#222222'
rangoactual.style.borderRadius = '30px'
rangoactual.style.display = 'flex'
rangoactual.style.justifyContent = 'center'
contrangos.appendChild(rangoactual)

const rangodeseado = document.createElement('div')
rangodeseado.style.width = '50%'
rangodeseado.style.height = '90%'
rangodeseado.style.backgroundColor = '#222222'
rangodeseado.style.borderRadius = '30px'
rangodeseado.style.marginLeft = '10px'
rangodeseado.style.display = 'flex'
rangodeseado.style.justifyContent = 'center'
contrangos.appendChild(rangodeseado)

const contbtn = document.createElement('div')
contbtn.style.display = 'flex'
contbtn.style.justifyContent = 'center'
contbtn.style.alignItems = 'center'
rangoactual.appendChild(contbtn)

const contbtn2 = document.createElement('div')
contbtn2.style.display = 'flex'
contbtn2.style.justifyContent = 'center'
contbtn2.style.alignItems = 'center'
rangodeseado.appendChild(contbtn2)

//////////////////////////////////
const btnhierro1 = document.createElement('input')
btnhierro1.type = 'button'
btnhierro1.id = 'btnhierro'
btnhierro1.value = 'Hierro'
contbtn.appendChild(btnhierro1)

const btnbronce1 = document.createElement('input')
btnbronce1.type = 'button'
btnbronce1.id = 'btnbronce'
btnbronce1.value = 'Bronce'
contbtn.appendChild(btnbronce1)

const btnplata1 = document.createElement('input')
btnplata1.type = 'button'
btnplata1.id = 'btnplata'
btnplata1.value = 'Plata'
contbtn.appendChild(btnplata1)

const btnoro1 = document.createElement('input')
btnoro1.type = 'button'
btnoro1.id = 'btnoro'
btnoro1.value = 'Oro'
contbtn.appendChild(btnoro1)

const btnplatino1 = document.createElement('input')
btnplatino1.type = 'button'
btnplatino1.id = 'btnplatino'
btnplatino1.value = 'Platino'
contbtn.appendChild(btnplatino1)

const btndiamante1 = document.createElement('input')
btndiamante1.type = 'button'
btndiamante1.id = 'btndiamante'
btndiamante1.value = 'Diamante'
contbtn.appendChild(btndiamante1)

const btnascendente1 = document.createElement('input')
btnascendente1.type = 'button'
btnascendente1.id = 'btnascendente'
btnascendente1.value = 'Ascendente'
contbtn.appendChild(btnascendente1)



const btninmortal1 = document.createElement('input')
btninmortal1.type = 'button'
btninmortal1.id = 'btninmortal'
btninmortal1.value = 'Inmortal'
contbtn.appendChild(btninmortal1)

const btnhradiante1 = document.createElement('input')
btnhradiante1.type = 'button'
btnhradiante1.id = 'btnradiante'
btnhradiante1.value = 'Radiante'
contbtn.appendChild(btnhradiante1)



//////////////////////////////////
 
const btnhierro2 = document.createElement('input')
btnhierro2.type = 'button'
btnhierro2.id = 'btnhierro1'
btnhierro2.value = 'Hierro'
contbtn2.appendChild(btnhierro2)

const btnbronce2 = document.createElement('input')
btnbronce2.type = 'button'
btnbronce2.id = 'btnbronce1'
btnbronce2.value = 'Bronce'
contbtn2.appendChild(btnbronce2)

const btnplata2 = document.createElement('input')
btnplata2.type = 'button'
btnplata2.id = 'btnplata1'
btnplata2.value = 'Plata'
contbtn2.appendChild(btnplata2)

const btnoro2 = document.createElement('input')
btnoro2.type = 'button'
btnoro2.id = 'btnoro1'
btnoro2.value = 'Oro'
contbtn2.appendChild(btnoro2)

const btnplatino2 = document.createElement('input')
btnplatino2.type = 'button'
btnplatino2.id = 'btnplatino1'
btnplatino2.value = 'Platino'
contbtn2.appendChild(btnplatino2)

const btndiamante2 = document.createElement('input')
btndiamante2.type = 'button'
btndiamante2.id = 'btndiamante1'
btndiamante2.value = 'Diamante'
contbtn2.appendChild(btndiamante2)

const btnascendente2 = document.createElement('input')
btnascendente2.type = 'button'
btnascendente2.id = 'btnascendente1'
btnascendente2.value = 'Ascendente'
contbtn2.appendChild(btnascendente2)



const btninmortal2 = document.createElement('input')
btninmortal2.type = 'button'
btninmortal2.id = 'btninmortal1'
btninmortal2.value = 'Inmortal'
contbtn2.appendChild(btninmortal2)

const btnhradiante2 = document.createElement('input')
btnhradiante2.type = 'button'
btnhradiante2.id = 'btnradiante1'
btnhradiante2.value = 'Radiante'
contbtn2.appendChild(btnhradiante2)


///////////////////////////////////
//  const totalcont = document.createElement('div')
//  totalcont.style.backgroundColor = '#222222'
//  totalcont.style.width = '250px'
//  totalcont.style.height = '150px'
//  totalcont.style.marginLeft = '10px'
//  totalcont.style.borderRadius = '23px'
//  totalcont.style.display = 'flex'
//  totalcont.style.justifyContent = 'center'
//  totalcont.style.alignItems = 'center'
//  totalcont.style.marginLeft = '1500px'
//  totalcont.style.marginTop = '20px'
   
//  const h1total = document.createElement('h1')
//  h1total.innerText = 'Total = '
//  totalcont.appendChild(h1total)

//  const precio = document.createElement('div')
//  precio.style.width = '100px'
//  precio.style.height = '75px'
//  precio.style.borderRadius = '15px'
//  precio.style.marginLeft = '5px'
//  precio.style.backgroundColor = 'rgb(15, 15, 15)'
//  totalcont.appendChild(precio)   



const br = document.createElement('br')
cuerpo.appendChild(br)

const totalcont = document.createElement('div')
totalcont.style.display = 'flex'
cuerpo.appendChild(totalcont)

const total = document.createElement('h1')
total.innerText = 'Total ='
total.style.color = 'white'
total.style.marginRight = '5px'
totalcont.appendChild(total)

const precio = document.createElement('h1')
precio.id = 'precio'
precio.innerText = '0'
precio.style.color = 'white'
totalcont.appendChild(precio)


////////////Footer//////////
const pie = document.createElement('footer')
pie.style.backgroundColor = 'black'
pie.style.height = '250px'
pie.style.display = 'flex'
pie.style.justifyContent = 'center'

const redescont = document.createElement('div')
redescont.style.textAlign = 'center'
pie.appendChild(redescont)

const titredes = document.createElement('h1')
titredes.innerText = 'Nuestras Redes!'
titredes.style.fontSize = '25px'
titredes.style.marginBottom = '70px'
redescont.prepend(titredes)

const ig = document.createElement('a')
ig.href = 'https://www.instagram.com/'
ig.style.textDecoration = 'none'

redescont.appendChild(ig)
const fb = document.createElement('a')
fb.href = 'https://es-la.facebook.com/'
fb.style.textDecoration = 'none'

redescont.appendChild(fb)
const tw = document.createElement('a')
tw.href = 'https://twitter.com/?lang=es'
tw.style.textDecoration = 'none'
redescont.appendChild(tw)

const iIg = document.createElement('i')
iIg.classList = 'fi fi-brands-instagram'
iIg.style.fontSize = '25px'
iIg.style.letterSpacing = '50px'
ig.appendChild(iIg)
const iFb = document.createElement('i')
iFb.classList = 'fi fi-brands-facebook'
iFb.style.fontSize = '25px'
iFb.style.margin = '50px'
fb.appendChild(iFb)
const iTw = document.createElement('i')
iTw.classList = 'fi fi-brands-twitter'
iTw.style.fontSize = '25px'
iTw.style.marginInlineStart= '50px'
tw.appendChild(iTw)

function obteneraño(){
    var  d = new  Date();
    var  n = d.getFullYear();
    return  n;
  }

const copyr = document.createElement('h3')
copyr.innerText = `©${obteneraño()} Valorant Boosting.`
copyr.style.marginTop = '50px'
redescont.appendChild(copyr)
