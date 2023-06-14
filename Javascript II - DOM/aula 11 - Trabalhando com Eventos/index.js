function register(ev) {
  console.log(register)
  const sectionElement = ev.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!")
  } else {
    alert("As senhas não conferem!")
  }

}

const button = document.getElementById('register-button') 

button.addEventListener('click', register) //Adicionando um evento

button.addEventListener('mouseover', function (ev) {  //Exemplo de outro tipo de evento: mouseover. \\ Dessa vez a função foi passada diretamente
  console.log(ev)
})

function removeEvent () {                //Removendo um evento. Neste caso o evento do tipo 'click' da função register
  button.removeEventListener('click', register)
  alert("Evento removido!")
}