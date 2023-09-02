// Variables Generales//
const d = document
const c = d.body

//Estilo General//

c.style.backgroundColor = '#222222'


// Contenedor general //
const container = d.createElement('div')
container.style.display = 'flex'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'
container.style.width = '100%'
container.style.height = '80%'
c.append(container)
// Contenedor Rango Actual //

const contRa = d.createElement('div')
container.append(contRa)

const h1Ra = d.createElement('h1')
contRa.append(h1Ra)

const contBtnRa = d.createElement('div')
contRa.append(contBtnRa)

// Estilo Contnedores RA //

contRa.style.width = '40%'
contRa.style.height = '70%'
contRa.style.backgroundColor = 'Black'
contRa.style.borderRadius = '25px'
contRa.style.marginRight = '10px'

h1Ra.innerText = 'Rango Actual'
h1Ra.style.color = '#d20c0c'
h1Ra.style.fontSize = '25px'
h1Ra.style.textAlign = 'Center'

contBtnRa.style.backgroundColor = 'rgb(15,15,15)'
contBtnRa.style.width = '90%'
contBtnRa.style.height = '70%'
contBtnRa.style.borderRadius = '20px'
contBtnRa.style.marginLeft = '5%'
contBtnRa.style.display = 'grid'
contBtnRa.style.gridTemplateColumns = 'repeat(3,5fr)'
contBtnRa.style.gridTemplateRows = 'repeat(3, fr)'
contBtnRa.style.columnGap = '50px'
contBtnRa.style.gridRowGap = '0px'

// Variables Botones RA //

const btnHierro1 = d.createElement ('input')
btnHierro1.type = 'button'
btnHierro1.id = 'hierroxd'
contBtnRa.append(btnHierro1)

const btnBronce1 = d.createElement ('input')
btnBronce1.type = 'button'
btnBronce1.id = 'broncexd'
contBtnRa.append(btnBronce1)

const btnPlata1 = d.createElement ('input')
btnPlata1.type = 'button'
btnPlata1.id = 'plataxd'
contBtnRa.append(btnPlata1)

const btnOro1 = d.createElement ('input')
btnOro1.type = 'button'
btnOro1.id = 'oroxd'
contBtnRa.append(btnOro1)

const btnPlatino1 = d.createElement ('input')
btnPlatino1.type = 'button'
btnPlatino1.id = 'platinoxd'
contBtnRa.append(btnPlatino1)

const btnDiamante1 = d.createElement ('input')
btnDiamante1.type = 'button'
btnDiamante1.id = 'diamantexd'
contBtnRa.append(btnDiamante1)

const btnAscendente1 = d.createElement ('input')
btnAscendente1.type = 'button'
btnAscendente1.id = 'ascendentexd'
contBtnRa.append(btnAscendente1)

const btnInmortal1 = d.createElement ('input')
btnInmortal1.type = 'button'
btnInmortal1.id = 'inmortalxd'
contBtnRa.append(btnInmortal1)

const btnRadiante1 = d.createElement ('input')
btnRadiante1.type = 'button'
btnRadiante1.id = 'radiantexd'
contBtnRa.append(btnRadiante1)

// Estilo Botones RA //

btnHierro1.style.borderRadius = '15px'
btnHierro1.style.backgroundColor = 'rgb(15,15,15)'
btnHierro1.style.marginLeft = '10px'

btnBronce1.style.borderRadius = '15px'
btnBronce1.style.backgroundColor = 'rgb(15,15,15)'

btnPlata1.style.borderRadius = '15px'
btnPlata1.style.backgroundColor = 'rgb(15,15,15)'

btnOro1.style.borderRadius = '15px'
btnOro1.style.backgroundColor = 'rgb(15,15,15)'
btnOro1.style.marginLeft = '10px'

btnPlatino1.style.borderRadius = '15px'
btnPlatino1.style.backgroundColor = 'rgb(15,15,15)'

btnDiamante1.style.borderRadius = '15px'
btnDiamante1.style.backgroundColor = 'rgb(15,15,15)'

btnAscendente1.style.borderRadius = '15px'
btnAscendente1.style.backgroundColor = 'rgb(15,15,15)'
btnAscendente1.style.marginLeft = '10px'

btnInmortal1.style.borderRadius = '15px'
btnInmortal1.style.backgroundColor = 'rgb(15,15,15)'

btnRadiante1.style.borderRadius = '15px'
btnRadiante1.style.backgroundColor = 'rgb(15,15,15)'


// Contenedor Rango Deseado //

const contRd = d.createElement('div')
container.append(contRd)

const h1Rd = d.createElement('h1')
contRd.append(h1Rd)

const contBtnRd = d.createElement('div')
contRd.append(contBtnRd)
contBtnRd.style.display = 'grid'
contBtnRd.style.gridTemplateColumns = 'repeat(3,5fr)'
contBtnRd.style.gridTemplateRows = 'repeat(3, fr)'
contBtnRd.style.columnGap = '50px'

// Estilo Contnedores RD //
contRd.style.width = '40%'
contRd.style.height = '70%'
contRd.style.backgroundColor = 'Black'
contRd.style.borderRadius = '25px'
contRd.style.marginLeft = '10px'

h1Rd.innerText = 'Rango Deseado'
h1Rd.style.color = '#d20c0c'
h1Rd.style.fontSize = '25px'
h1Rd.style.textAlign = 'Center'

contBtnRd.style.backgroundColor = 'rgb(15,15,15)'
contBtnRd.style.width = '90%'
contBtnRd.style.height = '70%'
contBtnRd.style.borderRadius = '20px'
contBtnRd.style.marginLeft = '5%'

// Variables Botones RD //

const btnHierro2 = d.createElement ('input')
btnHierro2.type = 'button'
btnHierro2.id = 'hierro1xd'
contBtnRd.append(btnHierro2)

const btnBronce2 = d.createElement ('input')
btnBronce2.type = 'button'
btnBronce2.id = 'bronce1xd'
contBtnRd.append(btnBronce2)

const btnPlata2 = d.createElement ('input')
btnPlata2.type = 'button'
btnPlata2.id = 'plata1xd'
contBtnRd.append(btnPlata2)

const btnOro2 = d.createElement ('input')
btnOro2.type = 'button'
btnOro2.id = 'oro1xd'
contBtnRd.append(btnOro2)

const btnPlatino2 = d.createElement ('input')
btnPlatino2.type = 'button'
btnPlatino2.id = 'platino1xd'
contBtnRd.append(btnPlatino2)

const btnDiamante2 = d.createElement ('input')
btnDiamante2.type = 'button'
btnDiamante2.id = 'diamante1xd'
contBtnRd.append(btnDiamante2)

const btnAscendente2 = d.createElement ('input')
btnAscendente2.type = 'button'
btnAscendente2.id = 'ascendente1xd'
contBtnRd.append(btnAscendente2)

const btnInmortal2 = d.createElement ('input')
btnInmortal2.type = 'button'
btnInmortal2.id = 'inmortal1xd'
contBtnRd.append(btnInmortal2)

const btnRadiante2 = d.createElement ('input')
btnRadiante2.type = 'button'
btnRadiante2.id = 'radiante1xd'
contBtnRd.append(btnRadiante2)

// Estilo Botones RD //

btnHierro2.style.borderRadius = '15px'
btnHierro2.style.backgroundColor = 'rgb(15,15,15)'
btnHierro2.style.marginLeft = '10px'

btnBronce2.style.borderRadius = '15px'
btnBronce2.style.backgroundColor = 'rgb(15,15,15)'

btnPlata2.style.borderRadius = '15px'
btnPlata2.style.backgroundColor = 'rgb(15,15,15)'

btnOro2.style.borderRadius = '15px'
btnOro2.style.backgroundColor = 'rgb(15,15,15)'
btnOro2.style.marginLeft = '10px'

btnPlatino2.style.borderRadius = '15px'
btnPlatino2.style.backgroundColor = 'rgb(15,15,15)'

btnDiamante2.style.borderRadius = '15px'
btnDiamante2.style.backgroundColor = 'rgb(15,15,15)'

btnAscendente2.style.borderRadius = '15px'
btnAscendente2.style.backgroundColor = 'rgb(15,15,15)'
btnAscendente2.style.marginLeft = '10px'

btnInmortal2.style.borderRadius = '15px'
btnInmortal2.style.backgroundColor = 'rgb(15,15,15)'

btnRadiante2.style.borderRadius = '15px'
btnRadiante2.style.backgroundColor = 'rgb(15,15,15)'

// Variables total //

const conttoltal = d.createElement('div')
conttoltal.style.display = 'flex'
conttoltal.style.justifyContent = 'center'
conttoltal.style.alignItems = 'center'
conttoltal.style.backgroundColor = 'black'
conttoltal.style.width = '350px'
conttoltal.style.height = '80px'
conttoltal.style.borderRadius = '20px'
c.append(conttoltal)

const h1total = d.createElement('h1')
h1total.innerText = 'Total = $ '
h1total.style.color = '#222222'
conttoltal.append(h1total)

const h1precio = d.createElement('h1')
h1precio.innerHTML = ''
h1precio.style.color = '#222222'
h1precio.id = 'precio'
conttoltal.append(h1precio)

// Boton Pagar //

const btnpagar = d.createElement('input')
btnpagar.type = 'button'
c.append(btnpagar)

// Boton Pagar Style //
btnpagar.id = 'boton-pagar'
btnpagar.style.marginLeft = '48%'
btnpagar.style.width = '8%'
btnpagar.style.height = '3%'
btnpagar.style.display = 'none'
btnpagar.style.backgroundColor = 'black'
btnpagar.style.color = 'white'
btnpagar.style.borderRadius = '15px'
btnpagar.value = 'Pagar'