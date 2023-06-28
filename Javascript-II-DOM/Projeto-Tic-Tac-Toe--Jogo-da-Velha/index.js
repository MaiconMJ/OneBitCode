const main = document.querySelector('main') 
const root = document.querySelector(':root')     
const input1 = document.getElementById('name').value
const input2 = document.getElementById('name2').value


document.getElementById('switchPlayer').addEventListener('click', function () {
  if (main.dataset.player === 'player1') {                          
    // root.style.setProperty('--bg-color', '#f1f5f9')              
    // root.style.setProperty('--border-color', '#aaa')
    // root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#26834a')
    main.dataset.player = 'player2'
  } else {
    // root.style.setProperty('--bg-color', '#212529')             
    // root.style.setProperty('--border-color', '#666')
    // root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.player = 'player1'
  }                                                   
})


document.querySelectorAll('.gameBtn').forEach(function (gameButton) {
  gameButton.addEventListener('click', function () {
    if (main.dataset.player === 'player1') {
      gameButton.innerText = 'X'
    } else {
      gameButton.innerText = 'O'
    }
  })
})
