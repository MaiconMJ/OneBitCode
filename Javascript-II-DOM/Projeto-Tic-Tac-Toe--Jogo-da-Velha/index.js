const boardRegion = document.querySelectorAll('#gameBoard span')
const section = document.querySelector('section') 
const root = document.querySelector(':root')     
let turnPlayer = ''

function updateTitle () {
  const playerInput = document.getElementById(turnPlayer)
  document.getElementById('turnPlayer').innerText = playerInput.value
}

function initializeGame () {
  turnPlayer = 'player1'
  document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
  updateTitle()

  boardRegion.forEach(function (element) {
    element.classList.remove('win')
    element.innerText = ''
    element.classList.add('cursor-pointer')
    element.addEventListener('click', handleBoardClick)
  })






































}

function handleBoardClick(ev) {
  const span = ev.currentTarget
  if (turnPlayer === 'player1') {
    span.innerText = 'X'
  } else {
    span.innerText = 'O'
  }
}

document.getElementById('start').addEventListener('click', initializeGame)


// document.getElementById('switchPlayer').addEventListener('click', function () {
//   if (section.dataset.player === 'player1') {                          
//     root.style.setProperty('--primary-color', '#914dff')
//     section.dataset.player = 'player2'
//   } else {
//     root.style.setProperty('--primary-color', '#4d62ff')
//     section.dataset.player = 'player1'
//   }                    
  
  
// })

// document.querySelectorAll('.cursor-pointer').forEach(function (element) {
//   element.addEventListener('click', function () {
//     if (turnPlayer === 'player1' && element.innerText === '') {
//       element.innerText = 'X'
//     } else if (turnPlayer === 'player2' && element.innerText === '') {
//       element.innerText = 'O'
//     }element
//   })
// })
