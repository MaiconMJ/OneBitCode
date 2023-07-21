// Usando o Session Storage

document.getElementById('sessionBtn').addEventListener('click', function () {
  const input = document.getElementById('session')
  sessionStorage.setItem('nomeDaChave', input.value)
  input.value = ''
})