let opcao = ''
let imoveisCadastrados = []

do {

  opcao = prompt("Bem-vindo ao Cadastro de Imóveis.\n" + "\nTotal de imóveis: " + imoveisCadastrados.length +"\n\nSelecione uma opção:\n\n" +
  "1. Salvar imóvel\n" + "2. Consultar imóveis cadastrados\n" + 
  "3. Sair")

  switch (opcao) {
    case '1':
      let novoImovel = {}
      novoImovel.nome = prompt('Informe o nome do proprietário:')
      novoImovel.quartos = prompt('Infome a quantidade de quartos:')
      novoImovel.banheiros = prompt('Informe a quantidade de banheiros:')
      novoImovel.garagem = prompt('Possui garagem? Sim/Não')
      break
    case '2':
  }


} while (opcao !== "3")