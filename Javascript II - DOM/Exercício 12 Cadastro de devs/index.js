//Create label function

function createLabel (text, htmlFor) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

//Create input function

function createInput (id, value, name, type='text', placeholder='') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}

const addTechBtn = document.getElementById('addTechBtn')  //botão
const form = document.getElementById('devForm')           //formulário
const developers = []                                     //array de devs vazio, solicitafo pelo exercício
let inputRows = 0                                         //linhas de inputs


addTechBtn.addEventListener('click', function (ev) {
  const stackIputs = document.getElementById('stackInputs')

  const newRow = document.createElement('li') 
  const rowIndex = inputRows            //Index para identificar cada input individualmente; Será passado como o parâmentro name: 'techExp-' + rowIndex
  inputRows++                           //Será adicionado +1 em cada linha (inputRow) ao rowIndex, para diferenciar um input do outro // Cada inputRow tem sua rowIndex
  newRow.id = 'inputRow' + rowIndex
  newRow.className = 'inputRow'

  // Text Inputs

  const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
  const techNameInput = createInput('techName-' + rowIndex, null, 'techName')
  
  // Radio Inputs

  const expLabel1 = createLabel('Experiência: ')
  const id1 = 'expRadio-' + rowIndex + '.1'
  const expRadioInput1= createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')

  const expLabel2 = createLabel('Experiência: ')
  const id2 = 'expRadio-' + rowIndex + '.2'
  const expRadioInput2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')

  const expLabel3 = createLabel('Experiência: ')
  const id3 = 'expRadio-' + rowIndex + '.3'
  const expRadioInput3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')

  //Colocando os elementos dentro dos nós pais
 
  newRow.append(techNameLabel, techNameInput)

  stackIputs.appendChild(newRow)
  
})