let opcao = ''

do {
  opcao = prompt('Selecione uma das oções de cálculo:\n' +
    '\n1. área do triângulo' +
    '\n2. área do retângulo' +
    '\n3. área do quadrado' +
    '\n4. área do trapézio' +
    '\n5. área do círculo' +
    '\n6. Sair'
  )

  switch (opcao) {

    case '1':

      let numero1 = parseFloat(prompt('Digite o valor da base'))
      let numero2 = parseFloat(prompt('Digire o valor da altura'))

      function triangulo(base, altura) {
        const area = (base * altura) / 2
        return area
      }

      const resultado = triangulo(numero1, numero2)
      alert('A área do triangulo é :' + resultado)
      console.log(resultado)
      break


    case '2':
      break
    case '3':
      break
    case '4':
      break
    case '5':
      break
    case '6':
      alert('Saindo...')
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== '6')