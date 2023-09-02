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
a2.innerHTML = 'Inicia Sesion'
a2.id = 'a2'
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

const h1bienvenida = document.createElement('h1')
h1bienvenida.innerHTML = ''
h1bienvenida.style.textAlign = 'center'
h1bienvenida.id = 'bienvenida'
h1bienvenida.style.fontSize = '60px'
introcont.appendChild(h1bienvenida)


////////////bosting//////////


const bostcontenedor = document.createElement('div')

const titulobost = document.createElement('h1')
bostcontenedor.appendChild(titulobost)

const servcont = document.createElement('div')
bostcontenedor.appendChild(servcont)

const csgo = document.createElement('a')
const imgcsgo = document.createElement('img')
servcont.appendChild(csgo)
imgcsgo.src = './boost/1.jpg'
csgo.appendChild(imgcsgo)

const val = document.createElement('a')
val.href = './paginas/boosting.html'
const imgval = document.createElement('img')
servcont.appendChild(val)
imgval.src = './boost/3.jpg'
val.appendChild(imgval)



const lol = document.createElement('a')
const imglol = document.createElement('img')
servcont.appendChild(lol)
imglol.src = './boost/2.jpg'
lol.appendChild(imglol)




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
imgval.style.width = '300px'
imglol.style.width = '300px'

imgcsgo.style.height = '450px'
imgval.style.height = '450px'
imglol.style.height = '450px'

imgcsgo.style.margin = '15px'
imgval.style.margin = '15px'
imglol.style.margin = '15px'


////////////Footer//////////
const pie = document.createElement('footer')
pie.style.backgroundColor = 'black'
pie.style.height = '200px'
pie.style.display = 'flex'
pie.style.justifyContent = 'center'

const redescont = document.createElement('div')
redescont.style.textAlign = 'center'
pie.appendChild(redescont)

const titredes = document.createElement('h1')
titredes.innerText = 'Nuestras Redes!'
titredes.style.color = '#d20c0c'
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
copyr.style.fontSize = '20px'
copyr.style.marginTop = '50px'
redescont.appendChild(copyr)






cuerpo.prepend(bostcontenedor)
cuerpo.prepend(introcont)
cuerpo.prepend(capucha)
cuerpo.appendChild(pie)
