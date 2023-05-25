let opcao = ""
const vagas = []

do {
  opcao = prompt(
    'Bem-vindo ao Cadastro de Vagas.\n\n' + 
    
    'Total de vagas: \n' + vagas.length +

    '\nSelecione uma opção: ' +
    '\n1. Listar vagas disponíveis' +
    '\n2. Criar uma nova vaga' +
    '\n3. Visualizar uma vaga' +
    '\n4. Inscrever um candidato em uma vaga' +
    '\n5. Excluir uma vaga' +
    '\n6. Sair'
  )

  switch(opcao) {
    case "1":
      for (let i = 0; i < vagas.length; i++){
        alert(
          'Vaga ' + (i + 1) +
          '\nNome: ' + vagas[i].nome +
          '\nNúmero de candidatos: ' 

          )
      }
    break

    case "2":
      

    break

    case "3":

    break

    case "4":

    break

    case "5":

    break

    case "6":
      alert("saindo...")
    break
  }


} while (opcao !== "6")