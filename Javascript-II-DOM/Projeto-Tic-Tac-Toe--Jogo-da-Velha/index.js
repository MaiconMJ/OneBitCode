const input1 = document.getElementById('name').value 
const input2 = document.getElementById('name2').value


document.querySelectorAll('.gameBtn').forEach(function (gameButton) {
  gameButton.addEventListener('click', function() {
    if (gameButton.innerText === '') {
      gameButton.innerText = 'x'
    }
  })
})


