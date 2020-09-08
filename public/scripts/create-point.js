//codigos JS



function populateUfs() {
    const ufSelect = document.querySelector('select[name=uf]')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then( (res) => {return res.json()} )
    .then( states => {
        
        for(let state of states ){
            
        ufSelect.innerHTML +=  `<option value= "${state.id}">${state.nome}</option>`
          

        }
        
    } )
    
}

populateUfs()


document
    .querySelector('select[name=uf]')
    .addEventListener('change' , getCities)


function getCities(event) {
    
    const citySelect = document.querySelector('select[name=city]')
    const stateInput = document.querySelector('input[name=state]')
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    console.log(stateInput)

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    

    citySelect.innerHTML = '<option value>Selecione a cidade </option>'
    citySelect.disabled = true
        
    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        

        for(const city of cities ){
        
        citySelect.innerHTML +=  `<option value= "${city.nome}"> ${city.nome}</option>`
        
        }
        citySelect.disabled = false
    } )

    
}

// itens de coleta
// pegar todos os Li's

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener('click' , handleSelectedItem)

}


const collectedItems = document.querySelector('input[name=items]')
let selectedItems = []

function handleSelectedItem(event){
    // add or remove one class with JS
   
    const itemLi = event.target
    itemLi.classList.toggle('selected') 


    const itemId = itemLi.dataset.id

    console.log('itemId:' , itemId)
    
    //verificar se existem itens selecionados, se sim, pegar os itens selecionados.

    const alreadySelected = selectedItems.findIndex( item  => {
        const itemFound  = item == itemId // isso retornará true ou false. 
        return itemFound 

    })

    // se já estiver selecionado, tirar da seleção

    if (alreadySelected >= 0) {
        //tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemsDifferent = item != itemId // false
            return itemsDifferent
        })

        selectedItems = filteredItems


    }else{
    // se não estiver selecionado, 
    //adicionar a seleção 
        selectedItems.push(itemId)
    }

    console.log('selectedItems:' , selectedItems)
    collectedItems.value = selectedItems

}



const SuccesRegister = document.querySelector('button.register')
const modal = document.querySelector('#modal')


SuccesRegister.addEventListener('click' , () => {
    modal.classList.remove('hide')

})

close.addEventListener('click' ,() => {
    modal.classList.add('hide')
})

