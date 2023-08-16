//Variables Generales//
const cuerpo = document.body
const cabeza = document.head
const intro = document.intro

//Estilo General//
                    //Head Estilo//
const titulo = document.createElement('title')
titulo.innerText = 'Valorant Boosting'
cabeza.appendChild(titulo)
                    //Body Estilo//
cuerpo.style.backgroundColor = '#222'
cuerpo.style.height = '1500px'

///NavBar Variables///
const capucha = document.createElement('header')



const titulo23 = document.createElement('h1')
titulo23.innerText = 'Valorant Boosting'
capucha.appendChild(titulo23)

const nave = document.createElement('nav')
capucha.appendChild(nave)

const ul = document.createElement('ul')
nave.appendChild(ul)

const li1 = document.createElement('li')
const a1 = document.createElement('a')
a1.style.paddingRight = '30px'
a1.innerText = 'Contacto'
a1.href = './paginas/contact.html'
ul.appendChild(li1)
li1.appendChild(a1)

const li2 = document.createElement('li')
const a2 = document.createElement('a')
a2.style.paddingRight = '30px'
a2.innerText = 'Inicia Sesion'
a2.href = './paginas/login.html'
ul.appendChild(li2)
li2.appendChild(a2)



// estilo //
cuerpo.style.margin = '0px'

capucha.style.backgroundColor = 'black'
capucha.style.display = 'flex'
capucha.style.justifyContent = 'space-between'
capucha.style.alignItems = 'center'
capucha.style.padding = '10px'

//h1//
titulo23.style.color = '#d20c0c'
titulo23.display ='flex'
titulo23.alignItems = 'center'
//nav//
ul.style.display = 'flex'
ul.style.alignItems = 'center'
ul.style.justifyContent ='space-between'
//a//
a1.style.color = 'd2c0c0'
a1.style.textDecoration = 'none'

a2.style.color = 'd2c0c0'
a2.style.textDecoration = 'none'



////////////////////Intro//////////////////
const introcont = document.createElement('div')
introcont.id = 'intro'


const h1intro = document.createElement('h1')
h1intro.innerText = 'El servicio de Boosting mas grande de Latinoamerica!'
h1intro.style.color  = 'd20c0c'
h1intro.style.textAlign = 'center'
h1intro.style.paddingTop = '150px'
h1intro.style.fontSize = '60px'
introcont.appendChild(h1intro)


////////////bosting//////////


const bostcontenedor = document.createElement('div')

const titulobost = document.createElement('h1')
bostcontenedor.appendChild(titulobost)

const servcont = document.createElement('div')
bostcontenedor.appendChild(servcont)

const csgo = document.createElement('div')
servcont.appendChild(csgo)
const acsgo = document.createElement('a')
csgo.appendChild(acsgo)
const imgcsgo = document.createElement('img')
imgcsgo.src = './boost/1.jpg'
acsgo.appendChild(imgcsgo)

const valorant = document.createElement('div')
servcont.appendChild(valorant)
const avalorant = document.createElement('a')
valorant.appendChild(avalorant)
const imgvalorant = document.createElement('img')
imgvalorant.src = './boost/2.jpg'
avalorant.appendChild(imgvalorant)

const lol = document.createElement('div')
servcont.appendChild(lol)
const alol = document.createElement('a')
lol.appendChild(alol)
const imglol = document.createElement('img')
imglol.src = './boost/3.jpg'
alol.appendChild(imglol)




/// Style Boosting ///

bostcontenedor.style.backgroundColor = 'black'
bostcontenedor.style.height = '550px'
bostcontenedor.style.margin = '50px'
bostcontenedor.style.borderRadius = '25px'
servcont.style.display = 'flex'
servcont.style.flexWrap = 'wrap'
servcont.style.justifyContent = 'center'
servcont.style.alignItems = 'center'

titulobost.innerText = 'Nuestros Servicios!!'
titulobost.style.color = '#d20c0c'
titulobost.style.textAlign = 'center'


imgcsgo.style.width = '300px'
imgvalorant.style.width = '300px'
imglol.style.width = '300px'

imgcsgo.style.height = '450px'
imgvalorant.style.height = '450px'
imglol.style.height = '450px'

imgcsgo.style.margin = '15px'
imgvalorant.style.margin = '15px'
imglol.style.margin = '15px'
































cuerpo.prepend(bostcontenedor)
cuerpo.prepend(introcont)
cuerpo.prepend(capucha)