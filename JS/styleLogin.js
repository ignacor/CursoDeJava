const cuerpo = document.body
cuerpo.classList = 'login'

const containerlog  = document.createElement('div')
containerlog.classList = 'containerlog'
cuerpo.prepend(containerlog)

const formcontent  = document.createElement('div')
formcontent.classList = 'form-content'
containerlog.appendChild(formcontent)

const titulo  = document.createElement('h1')
titulo.id = 'title'
titulo.innerText = 'Registro'
formcontent.appendChild(titulo)

const formulario  = document.createElement('form')
formcontent.appendChild(formulario)

const inputgroup  = document.createElement('div')
inputgroup.classList = 'input-group'
formulario.appendChild(inputgroup)

const divname  = document.createElement('div')
divname.classList = 'input-field'
divname.id = 'nameInput'
divname.id = 'nameInput'
inputgroup.appendChild(divname)

const iname  = document.createElement('i')
iname.classList = 'fa-solid fa-user'
divname.appendChild(iname)
const inputname  = document.createElement('input')
inputname.type = 'text'
inputname.placeholder = 'Nombre'
divname.appendChild(inputname)

const divcorreo  = document.createElement('div')
divcorreo.classList = 'input-field'
inputgroup.appendChild(divcorreo)

const icorreo  = document.createElement('i')
icorreo.classList = 'fa-solid fa-envelope'
divcorreo.appendChild(icorreo)
const inputcorreo  = document.createElement('input')
inputcorreo.type = 'email'
inputcorreo.placeholder = 'Correo'
divcorreo.appendChild(inputcorreo)

const divcontraseña  = document.createElement('div')
divcontraseña.classList = 'input-field'
inputgroup.appendChild(divcontraseña)

const icontraseña  = document.createElement('i')
icontraseña.classList = 'fa-solid fa-lock'
divcontraseña.appendChild(icontraseña)
const inputcontraseña  = document.createElement('input')
inputcontraseña.type = 'password'
inputcontraseña.placeholder = 'Contraseña'
divcontraseña.appendChild(inputcontraseña)

const divbtn  = document.createElement('div')
divbtn.classList = 'btn-field'
formulario.appendChild(divbtn)

const btnup  = document.createElement('button')
btnup.id = 'signUp'
btnup.type = 'button'
btnup.innerText = 'Registro'
divbtn.appendChild(btnup)

const btnin  = document.createElement('button')
btnin.id = 'signIn'
btnin.type = 'button'
btnin.innerText = 'Login'
btnin.classList = 'disable'
divbtn.appendChild(btnin)


//Estilo//

cuerpo.style.margin = '0'
cuerpo.style.padding = '0'
cuerpo.style.fontFamily = 'Arial,Helvetica, sans-serif'
cuerpo.style.boxSizing = 'border-box'
cuerpo.style.textDecoration = 'none'
cuerpo.style.backgroundColor = '#222222'

containerlog.style.width = '100%'
containerlog.style.height = '100vh'
containerlog.style.display = 'flex'
containerlog.style.alignItems = 'center'
containerlog.style.justifyContent = 'center'

formcontent.style.width = '100%'
formcontent.style.maxWidth = '450px'
formcontent.style.backgroundColor = 'black'
formcontent.style.padding = '50px 60px 70px'
formcontent.style.textAlign = 'center'
formcontent.style.borderRadius = '25px'

titulo.style.fontSize = '30px'
titulo.style.marginBottom = '60px'
titulo.style.color = '#d20c0c'
titulo.style.position = 'relative'


divname.style.backgroundColor = 'rgb(15, 15, 15)'
divname.style.margin = '15px 0'
divname.style.borderRadius = '3px'
divname.style.display = 'flex'
divname.style.alignItems = 'center'
divname.style.transition = 'max-height 0.5s'
divname.style.overflow = 'hidden'

divcorreo.style.backgroundColor = 'rgb(15, 15, 15)'
divcorreo.style.margin = '15px 0'
divcorreo.style.borderRadius = '3px'
divcorreo.style.display = 'flex'
divcorreo.style.alignItems = 'center'
divcorreo.style.transition = 'max-height 0.5s'
divcorreo.style.overflow = 'hidden'

divcontraseña.style.backgroundColor = 'rgb(15, 15, 15)'
divcontraseña.style.margin = '15px 0'
divcontraseña.style.borderRadius = '3px'
divcontraseña.style.display = 'flex'
divcontraseña.style.alignItems = 'center'
divcontraseña.style.transition = 'max-height 0.5s'
divcontraseña.style.overflow = 'hidden'

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

iname.style.marginLeft = '15px'
iname.style.color = 'red'

icorreo.style.marginLeft = '15px'
icorreo.style.color = 'red'

icontraseña.style.marginLeft = '15px'
icontraseña.style.color = 'red'

divbtn.style.width = '100%'
divbtn.style.display = 'flex'
divbtn.style.justifyContent = 'space-between'

btnup.style.flexBasis = '48%'
btnup.style.fontSize = '16px'
btnup.style.backgroundColor = '#222222'
btnup.style.color = '#d20c0c'
btnup.style.height = '40px'
btnup.style.borderRadius = '10px'
btnup.style.border = '0'
btnup.style.outline = '0'
btnup.style.cursor = 'pointer'
btnup.style.transition = 'background 1s'

btnin.style.flexBasis = '48%'
btnin.style.fontSize = '16px'
btnin.style.backgroundColor = '#222222'
btnin.style.color = '#d20c0c'
btnin.style.height = '40px'
btnin.style.borderRadius = '10px'
btnin.style.border = '0'
btnin.style.outline = '0'
btnin.style.cursor = 'pointer'
btnin.style.transition = 'background 1s'

inputgroup.style.height = '250px'

const disable = document.getElementById(disable)
disable.style.backgroundColor = '#222222'
disable.style.color = 'd20c0c'

///
