//LOG IN//
const cuerpolog = document.body

//////Constantes////
const containerlog = document.createElement('div')
const content = document.createElement('div')
const h1 = document.createElement('h1')
const form = document.createElement('form')
const inputcont = document.createElement('div')

const divfield = document.createElement('div')
const iuser = document.createElement('i')
const inputname = document.createElement('input')

const divfield2 = document.createElement('div')
const icorreo = document.createElement('i')
const inputcorreo = document.createElement('input')

const divfield3 = document.createElement('div')
const icontraseña = document.createElement('i')
const inputcontraseña = document.createElement('input')

const divbtn = document.createElement('div')
const btsigup = document.createElement('button')
const btsignin = document.createElement('button')
/////////////////////

cuerpolog.prepend(containerlog)
containerlog.appendChild(content)
content.appendChild(h1)
content.appendChild(form)
form.appendChild(inputcont)
inputcont.appendChild(divfield)
divfield.appendChild(iuser)
divfield.appendChild(inputname)
form.appendChild(divfield2)
divfield2.appendChild(icorreo)
divfield2.appendChild(inputcorreo)
form.appendChild(divfield3)
divfield3.appendChild(icontraseña)
divfield3.appendChild(inputcontraseña)
inputcont.appendChild(divbtn)
divbtn.prepend(btsigup)
divbtn.prepend(btsignin)








containerlog.style.width = '100%'
containerlog.style.height = '100vh'
containerlog.style.display = 'flex'
containerlog.style.alignItems = 'center'
containerlog.style.justifyContent = 'center'

content.style.width = '100%'
content.style.maxWidth = '450px'
content.style.backgroundColor = 'black'
content.style.padding = '50px 60px 70px'
content.style.textAlign = 'center'
content.style.borderRadius = '25px'

h1.style.fontSize = '30px'
h1.style.marginBottom = '60px'
h1.style.color = '#d20c0c'
h1.style.position = 'relative'

divfield.style.backgroundColor = 'rgb(15, 15, 15)'
divfield.style.margin = '15px 0'
divfield.style.borderRadius = '3px'
divfield.style.display = 'flex'
divfield.style.alignItems = 'center'
divfield.style.transition = '0.5s'
divfield.style.overflow = 'hidden'

divfield2.style.backgroundColor = 'rgb(15, 15, 15)'
divfield2.style.margin = '15px 0'
divfield2.style.borderRadius = '3px'
divfield2.style.display = 'flex'
divfield2.style.alignItems = 'center'
divfield2.style.transition = '0.5s'
divfield2.style.overflow = 'hidden'

divfield3.style.backgroundColor = 'rgb(15, 15, 15)'
divfield3.style.margin = '15px 0'
divfield3.style.borderRadius = '3px'
divfield3.style.display = 'flex'
divfield3.style.alignItems = 'center'
divfield3.style.transition = '0.5s'
divfield3.style.overflow = 'hidden'

iuser.style.marginLeft = '15px'
iuser.style.color = 'red'
icorreo.style.marginLeft = '15px'
icorreo.style.color = 'red'
icontraseña.style.marginLeft = '15px'
icontraseña.style.color = 'red'

inputname.style.width = '100%'
inputname.style.background = 'transparent'
inputname.style.border = '0'
inputname.style.outline = 'none'
inputname.style.padding = '18px 15px'
inputname.style.color = 'grey'

inputcorreo.style.width = '100%'
inputcorreo.style.background = 'transparent'
inputcorreo.style.border = '0'
inputcorreo.style.outline = 'none'
inputcorreo.style.padding = '18px 15px'
inputcorreo.style.color = 'grey'

inputcontraseña.style.width = '100%'
inputcontraseña.style.background = 'transparent'
inputcontraseña.style.border = '0'
inputcontraseña.style.outline = 'none'
inputcontraseña.style.padding = '18px 15px'
inputcontraseña.style.color = 'grey'

divbtn.style.width = '100%'
divbtn.style.display = 'flex'
divbtn.style.justifyContent = 'space-between'

btsignin.style.flexBasis = '48%'
btsignin.style.fontSize = '16px'
btsignin.style.backgroundColor = '#222222'
btsignin.style.color = '#d20c0c'
btsignin.style.height = '40px'
btsignin.style.borderRadius = '10px'
btsignin.style.border = '0'
btsignin.style.outline = '0'
btsignin.style.cursor = 'pointer'
btsignin.style.transition = 'background 1s'

btsigup.style.flexBasis = '48%'
btsigup.style.fontSize = '16px'
btsigup.style.backgroundColor = '#222222'
btsigup.style.color = '#d20c0c'
btsigup.style.height = '40px'
btsigup.style.borderRadius = '10px'
btsigup.style.border = '0'
btsigup.style.outline = '0'
btsigup.style.cursor = 'pointer'
btsigup.style.transition = 'background 1s'

inputcont.style.height = '250px'


////Clases///

content.classList = 'form-content'
h1.classList = 'title'
inputcont.classList = 'input-group'

divfield.classList = 'input-field'
divfield.id = nameInput
iuser.classList = 'fa-solid fa-user'
inputname.type = text
inputname.placeholder = "Nombre"

divfield2.classList = 'input-field'
icorreo.classList = 'fa-solid fa-lock'
inputcorreo.type = 'email'
inputcorreo.placeholder = 'correo'

divfield3.classList = 'input-field'
icontraseña.classList = 'fa-solid fa-lock'
inputcontraseña.type = 'password'
inputcontraseña.placeholder = 'contraseña'

divbtn.classList = 'btn-field'
btsigup.id = "signUp";
btsigup.type = 'button'

btsignin.id = "signIn" ;
btsignin.type = 'button'
btsignin.classList = 'disable'



