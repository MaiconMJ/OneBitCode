function createLabel (text, htmlFor) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput (id, value, name, type='text', placeholder='') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function (ev) {
  const stackIputs = document.getElementById('stackInputs')

  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newRow.id = 'inputRow' + rowIndex
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
  const techNameInput = createInput('techName-' + rowIndex, null, 'techName')
  

  const expLabel1 = createLabel('Experiência: ')
  const id1 = 'expRadio-' + rowIndex + '.1'
  const expRadioInput1= createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')

  const expLabel2 = createLabel('Experiência: ')
  const id2 = 'expRadio-' + rowIndex + '.2'
  const expRadioInput2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')

  const expLabel3 = createLabel('Experiência: ')
  const id3 = 'expRadio-' + rowIndex + '.3'
  const expRadioInput3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
 
  newRow.append(techNameLabel, techNameInput)

  stackIputs.appendChild(newRow)
  
})