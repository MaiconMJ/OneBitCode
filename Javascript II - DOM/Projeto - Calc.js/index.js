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

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {    //Habilitando os botões
  charKeyBtn.addEventListener('click', function() {
    const value = charKeyBtn.dataset.value                               
    input.value += value                                                 //atribuindo ao input o value (charKeyBtn.dataset.value)
    console.log(input.value)
  })
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

function calculate () {
  console.log('calculado!')
}
