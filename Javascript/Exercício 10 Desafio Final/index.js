const vagas = []

function criarVaga() {

  const vaga = {}

  vaga.nome = prompt("Informe o nome da vaga: ")
  vaga.descricao = prompt("Descreva a vaga: ")
  vaga.dataLimite = prompt("Informe a data limite para se candidatar: ")

  const confirma = confirm(
    "Por favor, confirme se os dados estão corretos:\n" + 
    "\nNome da vaga: " + vaga.nome + 
    "\nDescrição: " + vaga.descricao + 
    "\nData limite: " + vaga.dataLimite)

  if (confirma) {
    vagas.push(vaga)
  }
}

function visualizarVaga() {
  for (let i = 0; i < vagas.length; i++) {
    prompt('Informe o índice da vaga: ')
    alert(
      'Vaga ' + (i + 1) +
      '\n' + vagas[i].nome +
      '\n' + vagas[i].descricao +
      '\n' + vagas[i].dataLimite
    )
  }
}

function exibirMenu() {
  return prompt(
    'Bem-vindo ao Cadastro de Vagas.\nTotal de vagas: ' + vagas.lenght +
    'Selecione uma opção: \n' +
    '1. Listar vagas disponíveis\n' +
    '2. Criar um nova vaga\n' +
    '3. Visualizar uma vaga\n' +
    '4. Inscrever um candidato em uma vaga\n' +
    '5. Excluir uma vaga\n' +
    '6. Sair\n'
  )
}

function executar() {
  let opcao = ''

  do {
    opcao = exibirMenu()
    let resultado

    switch (opcao) {
      case '':
        
    }
    switch (opcao) {
      case '':

    }
    switch (opcao) {
      case '':

    }
    switch (opcao) {
      case '':

    }
    switch (opcao) {
      case '':

    }
    switch (opcao) {
      case '':

    }
  } while (opcao !== '6')
} 