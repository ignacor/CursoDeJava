const c = document.body
const cabeza = document.head
c.classList = 'login'
// titulo //
const titulo = document.createElement('title')
titulo.innerText = 'Valorant Boosting - Login'
cabeza.prepend(titulo)
//
const containerlog  = document.createElement('div')
containerlog.classList = 'containerlog'
c.prepend(containerlog)

const formcontent  = document.createElement('div')
formcontent.classList = 'form-content'
containerlog.appendChild(formcontent)

const t  = document.createElement('h1')
t.id = 'title'
t.innerHTML = 'Registrate!'
t.style.position = 'relative'
formcontent.appendChild(t)

const formulario  = document.createElement('form')
formulario.id = 'formu'
formcontent.appendChild(formulario)

const inputgroup  = document.createElement('div')
inputgroup.classList = 'input-group'
formulario.appendChild(inputgroup)

const divname  = document.createElement('div')
divname.classList = 'input-field'
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
divcorreo.id = 'correoinput'
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
divcontraseña.id = 'passinput'
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

const signup = document.createElement('input')
signup.id = 'signUp'
signup.type = 'button'
signup.value = 'Registro'
divbtn.append(signup)

const signIn = document.createElement('input')
signIn.id = 'signIn'
signIn.type = 'button'
signIn.value = 'Login'
signIn.classList = 'disable'
divbtn.append(signIn)


//Estilo//

c.style.margin = '0'
c.style.padding = '0'
c.style.fontFamily = 'Arial,Helvetica, sans-serif'
c.style.boxSizing = 'border-box'
c.style.textDecoration = 'none'
c.style.backgroundColor = '#222222'

containerlog.style.width = '100%'
containerlog.style.height = '60%'
containerlog.style.display = 'flex'
containerlog.style.alignItems = 'center'
containerlog.style.justifyContent = 'center'

formcontent.style.width = '100%'
formcontent.style.maxWidth = '450px'
formcontent.style.backgroundColor = 'black'
formcontent.style.padding = '50px 60px 70px'
formcontent.style.textAlign = 'center'
formcontent.style.borderRadius = '25px'

t.style.fontSize = '30px'
t.style.marginBottom = '60px'
t.style.color = '#d20c0c'
t.style.position = 'relative'


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
inputname.id = 'innombre'

inputcorreo.style.width = '100%'
inputcorreo.style.background = 'transparent'
inputcorreo.style.border = '0'
inputcorreo.style.outline = 'none'
inputcorreo.style.padding = '18px 15px'
inputcorreo.style.color = 'grey'
inputcorreo.id = 'incorreo'

inputcontraseña.style.width = '100%'
inputcontraseña.style.background = 'transparent'
inputcontraseña.style.border = '0'
inputcontraseña.style.outline = 'none'
inputcontraseña.style.padding = '18px 15px'
inputcontraseña.style.color = 'grey'
inputcontraseña.id = 'incontraseña'

iname.style.marginLeft = '15px'
iname.style.color = 'red'

icorreo.style.marginLeft = '15px'
icorreo.style.color = 'red'

icontraseña.style.marginLeft = '15px'
icontraseña.style.color = 'red'

divbtn.style.width = '100%'
divbtn.style.display = 'flex'
divbtn.style.justifyContent = 'space-between'


signIn.style.flexBasis = '100%'
signIn.style.fontSize = '16px'
signIn.style.backgroundColor = '#222222'
signIn.style.color = '#d20c0c'
signIn.style.height = '40px'
signIn.style.borderRadius = '10px'
signIn.style.border = '0'
signIn.style.outline = '0'
signIn.style.cursor = 'pointer'
signIn.style.transition = 'background 1s'

signup.style.flexBasis = '100%'
signup.style.fontSize = '16px'
signup.style.backgroundColor = '#222222'
signup.style.color = '#d20c0c'
signup.style.height = '40px'
signup.style.borderRadius = '10px'
signup.style.border = '0'
signup.style.outline = '0'
signup.style.cursor = 'pointer'
signup.style.transition = 'background 1s'
signup.style.marginRight = '5px'
inputgroup.style.height = '250px'


///

//Cuentas Creadas //
        // cont cuentas //
const newacccont = document.createElement('div')
newacccont.style.backgroundColor = 'black'
newacccont.style.width = '100%'
newacccont.style.height = '40%'
newacccont.style.display = 'flex'
newacccont.style.justifyContent = 'center'
newacccont.style.alignItems = 'center'
newacccont.id = 'cuentas-cont'
c.append(newacccont)

const h1newacc = document.createElement('h1')
h1newacc.innerText = 'Cuentas Creadas'
h1newacc.style.color = '#d20c0c'
h1newacc.style.textAlign = 'center'
h1newacc.style.position = 'absolute'
h1newacc.style.marginBottom = '340px'
newacccont.append(h1newacc)