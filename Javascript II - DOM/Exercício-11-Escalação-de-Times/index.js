function escalarJogador() {

  const position = document.getElementById("position").value  //Pegando o valor do input e guaradando na variável
  const name = document.getElementById("name").value          //Pegando o valor do input e guaradando na variável
  const number = document.getElementById('number').value      //Pegando o valor do input e guaradando na variável

  const confirmation = confirm('Escalar ' + name + ' como ' + position + "?") //Confirmação

  if (confirmation) {   //Se confirmado...

    const jogadoresConvocados = document.getElementById("convocados")  //Ambiente onde serão exibidos os jogadores - ul.
    const jogador = document.createElement('li')  //Criando a li jogador
    jogador.id = "player-" + number
    jogador.innerText = position + ": " + name + " (" + number + ")" //O que será exibido
    jogadoresConvocados.appendChild(jogador)      //jogador(li) é filho de joogadoredConvocados(ul)

    document.getElementById("position").value = ""  //limpando os inputs
    document.getElementById("name").value = ""      //limpando os inputs
    document.getElementById("number").value = ""    //limpando os inputs

  }
}

function removerJogador() {
  const number = document.getElementById("numberToRemove").value  //Pegando o valor do input e guaradando na variável
  const playerToRemove = document.getElementById("player-" + number)  //id informado em jogador.id - linha 13

  const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?") //Confirmação. // playerToRemove.innerText : retorna o valor passado pelo usuário

  if (confirmation) {     //Se confirmado
    document.getElementById("convocados").removeChild(playerToRemove) //remove o jogador
    document.getElementById("numberToRemove").value = ""  //limpando o input
  }
}