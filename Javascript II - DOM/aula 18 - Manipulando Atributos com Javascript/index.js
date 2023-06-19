const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
  input.value = 'Olá, mundo' 

  console.log(input.value)
  console.log(input.getAttribute('value')) //para funcionar, o atributo value deve estar preenchido na tag html // Ver linha 13 em index.html
})

document.getElementById('type').addEventListener('click', function () {
  input.type = input.type !== 'radio' ? 'radio' : 'text'
  //input.setAttribute('type', 'radio') // Outra opção, setando o atributo diretamente // Opção de mão única
})

document.getElementById('placeholder').addEventListener('click', function () {
  input.placeholder = 'Digite aqui...'
})

document.getElementById('disable').addEventListener('click', function () {
  input.setAttribute('disabled', !input.disabled)
})