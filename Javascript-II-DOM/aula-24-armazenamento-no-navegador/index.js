// Usando o Session Storage

document.getElementById('sessionBtn').addEventListener('click', function () {
  const input = document.getElementById('session')
  sessionStorage.setItem('nomeDaChave', input.value)
  input.value = ''
})

document.getElementById('readSession').addEventListener('click', function () {
  const info = sessionStorage.getItem('nomeDaChave')
  alert('A informação salva é: ' + info)
})