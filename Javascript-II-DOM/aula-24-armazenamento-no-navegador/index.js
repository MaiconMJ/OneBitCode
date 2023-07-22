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

// Usando o Local Storage

document.getElementById('local').addEventListener('click', function () {
  const input = document.getElementById('local')
  localStorage.setItem('nomeDaChave', input.value)
  input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function () {
  const info = localStorage.getItem('nomeDaChave')
  alert('A informação salva é: ' + info)
})

// Usando os cookies

document.getElementById('cookieBtn').addEventListener('click', function () {
  const input = document.getElementById('cookie')
  // cookieName=value; expires=UTCstringData; path=/;
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2023, 9, 9) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})

// Outro exemplo utilizando os cookies

document.getElementById('cookie2Btn').addEventListener('click', function () {
  const input = document.getElementById('cookie2')
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = 'text=' + input.value + ';'
  const expiration = 'expires=' + new Date(2023, 8, 9) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})