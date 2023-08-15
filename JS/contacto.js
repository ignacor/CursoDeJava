const cuerpo = document.body




const containercontac = document.createElement('div') ; containercontac.classList = 'containercontac'
cuerpo.prepend(containercontac) 

const logocontac = document.createElement('h1'); logocontac.classList = 'logocontac'
containercontac.appendChild(logocontac)

const contactwraper = document.createElement('div') ; contactwraper.classList = 'contact-wrapper animated bounceInUp'
containercontac.appendChild(contactwraper)

const contactform = document.createElement('div') ; contactform.classList = 'contact-form'
contactwraper.appendChild(contactform)

const h3 = document.createElement('h3')
contactform.appendChild(h3)

const form = document.createElement('form')
contactform.appendChild(form)

const p1 = document.createElement('p')
form.appendChild(p1)

const nombre = document.createElement('label')
const inputname = document.createElement('input')
p1.appendChild(nombre)
p1.appendChild(inputname)

const p2 = document.createElement('p')
form.appendChild(p2)

const email = document.createElement('label')
const inputemail = document.createElement('input')
p1.appendChild(email)
p1.appendChild(inputemail)

const p3 = document.createElement('p') ; p3.classList = 'block'
form.appendChild(p3)

const mesage = document.createElement('label')
const textmesage = document.createElement('textarea')
p3.appendChild(mesage)
p3.appendChild(textmesage)

const p4 = document.createElement('p') ; p4.classList = 'block'
form.appendChild(p4)

const boton = document.createElement('button')
p4.appendChild(boton)

//Style body//

cuerpo.style.backgroundColor = 'rgb(15, 15, 15)'
cuerpo.style.color = 'wheat'
cuerpo.style.lineHeight = '1.6'
cuerpo.style.fontFamily = 'Quicksand, sans-serif'

//Style container//

containercontac.style.maxWidth = '1170px'
containercontac.style.marginLeft = 'auto'
containercontac.style.marginRight = 'auto'
containercontac.style.padding = '1.5em'

//Logo Contact //

logocontac.style.textAlign = 'center'
logocontac.style.fontSize = '3em'
logocontac.style.color = '#B70E21'

// contact wraper//

contactwraper.style.padding = '1em'

//contact form //

contactform.style.backgroundColor = 'black'
contactform.style.border = '2px solid black'
contactform.style.borderRadius = '25px'
 // form//
form.style.display = 'grid'
form.style.gridTemplateColumns = '1fr 1fr '
//label//
nombre.style.display = 'block'
nombre.innerText = 'Nombre completo'
email.style.display = 'block'
email.innerText = 'Direccon de E-mail'
mesage.style.display = 'block'
mesage.innerText = 'Mensage'
// p // 
        //p1//
p1.style.margin = '0'
p1.style.padding = '1em'
        //p2//
p2.style.margin = '0'
p2.style.padding = '1em'
        //p3//
p3.style.margin = '0'
p3.style.padding = '1em'
p3.style.gridColumn = '1/3'
        //p4//
p4.style.margin = '0'
p4.style.padding = '1em'
p4.style.gridColumn = '1/3'


// input name //
inputname.style.width = '100%'
inputname.style.padding = '.7em'
inputname.style.border = 'none'
inputname.style.background = 'none'
inputname.style.outline = '0'
inputname.style.color = '#fff'
inputname.style.borderBottom = '1px solid #d20c0c'
inputname.type = 'text'
inputname.name = 'fullname'

// input email //
inputemail.style.width = '100%'
inputemail.style.padding = '.7em'
inputemail.style.border = 'none'
inputemail.style.background = 'none'
inputemail.style.outline = '0'
inputemail.style.color = '#fff'
inputemail.style.borderBottom = '1px solid #d20c0c'
inputemail.type = 'email'
inputemail.name = 'email'

// text mesange //
textmesage.style.width = '100%'
textmesage.style.padding = '.7em'
textmesage.style.border = 'none'
textmesage.style.background = 'none'
textmesage.style.outline = '0'
textmesage.style.color = '#fff'
textmesage.style.borderBottom = '1px solid #d20c0c'
textmesage.name = 'message'
textmesage.rows = '3'

// boton //
boton.style.width = '100%'
boton.style.padding = '.7em'
boton.style.border = 'none'
boton.style.background = 'none'
boton.style.outline = '0'
boton.style.color = '#fff'
boton.style.borderBottom = '1px solid #d20c0c'
boton.style.backgroundColor = 'rgb(15, 15, 15)'
boton.style.border = '0'
boton.style.textTransform = 'uppercase'
boton.style.padding = '1em'
boton.innerText= 'Enviar'

// Funcion vacio //

function vacio () {
    if (( inputname && inputemail) === '')
    {
        alert('Todos los campos son Obligatorios')
    }

}
vacio()