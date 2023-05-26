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
      const novaVaga = {}
      
      novaVaga.nome = prompt('Digite o nome da vaga: ')
      novaVaga.descricao = prompt('Descreva a vaga: ')
      novaVaga.dataLimite = prompt('Digite a data limite para se candidatar: ')

      const confirmacao = confirm(
        'Os dados estão corretos?\n' +
        '\nNome da vaga: ' + novaVaga.nome +
        '\nDescrição da vaga: ' + novaVaga.descricao +
        '\nData limite: ' + novaVaga.dataLimite +
        
      )

      if (confirmacao) {
        vagas.push(novaVaga)
        alert('Vaga adicionada com sucesso!')
      } else {
        alert('cadastro cancelado')
      }

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