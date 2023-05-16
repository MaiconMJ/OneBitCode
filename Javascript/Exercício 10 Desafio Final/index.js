function listarVagas() {
  
}

function exibirMenu() {
  return prompt(
    "Bem-vindo ao Cadastro de Vagas.\nTotal de vagas: " + vagas.length +
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