const section = document.querySelector('section') 
const root = document.querySelector(':root')     
const input1 = document.getElementById('player1Input').value
const input2 = document.getElementById('player2Input').value
const dashboard = document.getElementById('game-result')


document.getElementById('switchPlayer').addEventListener('click', function () {
  if (section.dataset.player === 'player1') {                          
    // root.style.setProperty('--bg-color', '#f1f5f9')              
    // root.style.setProperty('--border-color', '#aaa')
    // root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#914dff')
    section.dataset.player = 'player2'
  } else {
    // root.style.setProperty('--bg-color', '#212529')             
    // root.style.setProperty('--border-color', '#666')
    // root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4d62ff')
    section.dataset.player = 'player1'
  }                                                   
})


document.querySelectorAll('.cursor-pointer').forEach(function (gameButton) {
  gameButton.addEventListener('click', function () {
    if (section.dataset.player === 'player1' && gameButton.innerText === '') {
      gameButton.innerText = 'X'
    } else if (section.dataset.player === 'player2' && gameButton.innerText === '') {
      gameButton.innerText = 'O'
    }
  })
})

const playerOne = document.createElement('h1')
playerOne.textContent = 'Teste'

dashboard.appendChild(playerOne)

