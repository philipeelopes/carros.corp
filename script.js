let antButton = document.getElementById('ant')
let proxButton = document.getElementById('prox')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.list .item')
let indicadores = document.querySelector('.indicadores')
let dots = indicadores.querySelectorAll("ul li")
let list = container.querySelector('.list')


let active = 0
let firstPosition = 0
let lastPosition = itens.length - 1


function setSlider(){



let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

      let dotsOld = indicadores.querySelector('ul li.ativo')
    dotsOld.classList.remove('ativo')
    dots[active].classList.add('ativo')

    indicadores.querySelector('.numeros').innerHTML = '0' +  (active + 1)

}



proxButton.onclick = () => {
    
    list.style.setProperty('--calculation', 1)
    
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    itens[active].classList.add('active')


}

antButton.onclick = () => {
    list.style.setProperty('--calculation', -1)

    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    itens[active].classList.add('active')
    


}