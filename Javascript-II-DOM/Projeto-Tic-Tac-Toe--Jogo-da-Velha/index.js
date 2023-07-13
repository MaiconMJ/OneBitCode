const main = document.querySelector('main') 
const root = document.querySelector(':root')     
const input1 = document.getElementById('player1').value
const input2 = document.getElementById('player2').value
const dashboard = document.getElementById('game-result')


document.getElementById('switchPlayer').addEventListener('click', function () {
  if (main.dataset.player === 'player1') {                          
    // root.style.setProperty('--bg-color', '#f1f5f9')              
    // root.style.setProperty('--border-color', '#aaa')
    // root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#914dff')
    main.dataset.player = 'player2'
  } else {
    // root.style.setProperty('--bg-color', '#212529')             
    // root.style.setProperty('--border-color', '#666')
    // root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4d62ff')
    main.dataset.player = 'player1'
  }                                                   
})


document.querySelectorAll('.gameBtn').forEach(function (gameButton) {
  gameButton.addEventListener('click', function () {
    if (main.dataset.player === 'player1' && gameButton.innerText === '') {
      gameButton.innerText = 'X'
    } else if (main.dataset.player === 'player2' && gameButton.innerText === '') {
      gameButton.innerText = 'O'
    }
  })
})

const playerOne = document.createElement('h1')
playerOne.textContent = 'Teste'

dashboard.appendChild(playerOne)

