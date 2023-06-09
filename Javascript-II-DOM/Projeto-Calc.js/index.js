//Funcionalidade: digitar na calculadora

//Selecionando alguns elementos:


//QuerySelector:
//Retorna o primeiro elemento dentro do documento que corresponde ao grupo especificado de seletores.
//Seleciona o elemento como se fosse o css
//Ex: ('myTag'), ('#my-Id'), ('.my-class')

const main = document.querySelector('main') 
const root = document.querySelector(':root')            //Da mesma forma que foi declarado no CSS
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

//Impedindo que o usuário digite outros caracteres além dos permitidos na calculadora:

//Array com todos os caracteres permitidos:

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]



//Habilitando os botões que aparecem no input

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {    
  charKeyBtn.addEventListener('click', function() {
    const value = charKeyBtn.dataset.value//<-este value é o data-value, não precisa colocar tudo por causa do dataset                        
    input.value += value                                                 //atribuindo ao input o value (charKeyBtn.dataset.value)
    console.log(input.value)
  })
})


//Habilitando o botão clear (ele não aparece no input, só serve para apagar)

document.getElementById('clear').addEventListener('click', function() {
  input.value = ''                       //Atribui um valor vazio ao input
  input.focus()                          //Faz o cursor focar no input após o botão clear ser acionado
})



//Adicionando o evento de quando a tecla é pressionada:

input.addEventListener("keydown", function (ev) {
  ev.preventDefault()                                 //Impedindo o comportamento padrão do input 
  if (allowedKeys.includes(ev.key)) {                 //ev.keys : tecla/evento que o usuário disparou
    input.value += ev.key  
    return                                            //Se dentro dos válidos, acrescenta o caracter ao value do input
  }
  if (ev.key === 'Backspace') {                       //verifica se a key pressionada é o Backspace, se sim atribui a ela o método de 
    input.value = input.value.slice(0, -1)            //remover(apagar) slice(0, -1) : a partir do caracter 0, remove o ultimo elemento
  }
  if (ev.key === 'Enter') {                           //Atribui a key Enter a função calculate()
    calculate()
  }
})


//Atribuindo ao botão 'igual' a função 'calcular'

document.getElementById('equal').addEventListener('click', calculate)


//Função de calcular

function calculate () {
 resultInput.value = 'ERROR'             
 resultInput.classList.add('error')
 const result = eval(input.value)
 resultInput.value = result
 resultInput.classList.remove('error')
}

//Função que habilita o botão copy

document.getElementById('copyToClipboard').addEventListener('click', function(ev) {
  const button = ev.currentTarget
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
})


//Função de trocar o tema

document.getElementById('themeSwitcher').addEventListener('click', function () {
  if (main.dataset.theme === 'dark') {                           //Verificando o tema atual
    root.style.setProperty('--bg-color', '#f1f5f9')              //acessando as propriedades do root e setando novas
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#26834a')
    main.dataset.theme = 'light'
  } else {
    root.style.setProperty('--bg-color', '#212529')              //acessando as propriedades do root e setando novas
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = 'dark'
  }                                                   
})