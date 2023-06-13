function escalarJogador () {

  const position = document.getElementById("position").value
  const name = document.getElementById("name").value
  const number = document.getElementById('number').value

  const confirmation = confirm('Escalar ' + name + ' como ' + position + "?")

  if (confirmation) {
    
    const jogadoresConvocados = document.getElementById("convocados")
    const jogador = document.createElement('li')
    jogador.id = "player-" + number
    jogador.innerText = position + ": " + name + " (" + number + ")"
    jogadoresConvocados.appendChild(jogador)

    document.getElementById("position").value = ""
    document.getElementById("name").value = ""
    document.getElementById("number").value = ""

  }

}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value
  const playerToRemove = document.getElementById("player-" + number)

  const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")

  if (confirmation) {
    document.getElementById("team-list").removeChild(playerToRemove)
    document.getElementById("numberToRemove").value = ""
  }
}