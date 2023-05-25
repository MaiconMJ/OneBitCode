let opcao = ""

do {
  opcao = prompt(
    'Bem-vindo ao Cadastro de Vagas.\n\n' + 
    
    'Total de vagas: \n' +

    '\nSelecione uma opção: ' +
    '\n1. Listar vagas disponíveis' +
    '\n2. Criar uma nova vaga' +
    '\n3. Visualizar uma vaga' +
    '\n4. Inscrever um candidato em uma vaga' +
    '\n5. Excluir uma vaga' +
    '\n6. Sair'
  )

  
} while (opcao !== "6")