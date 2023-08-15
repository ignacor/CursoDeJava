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
                    //Body Texto//

 

///NavBar Variables///
const capucha = document.createElement('header')
const contNav = document.createElement('div')
const navBar = document.createElement('nav')
const uls = document.createElement('ul')

const links = [
    {
        title : 'index',
        link : 'Valorant Boosting',
    },
    {
        title : 'contact',
        link : 'Contacto',
    },
    {
        title : 'login',
        link: 'Inicia Sesion'
    }
]
//Clases ParaNavBar//
navBar.classList = 'navbar navbar-expand-lg navbar navbar-dark bg-dark'
contNav.classList = 'container-fluid'
uls.classList = 'navbar-nav'
//Agregados Del NavBar//



navBar.appendChild(contNav)
contNav.appendChild(uls)
//Funciones NavBar//
links.forEach((name) => {
    uls.innerHTML += `
                    <li class="nav-item">
                        <a class="nav-link" href="./paginas/${name.title}.html">${name.link}</a> 
                    </li>  
    `
})

cuerpo.prepend(capucha)
capucha.prepend(navBar)




               


