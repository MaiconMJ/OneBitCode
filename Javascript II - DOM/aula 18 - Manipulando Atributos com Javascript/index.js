const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
  input.value = 'Olá, mundo'

  console.log(input.value)
  console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function () {
  input.type = input.type !== 'radio' ? 'radio' : 'text'
  //input.setAttribute('type', 'radio') // Outra opção, setando o atributo diretamente // Opção de mão única
})