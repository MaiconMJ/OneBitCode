let pacientes = ['Pedro', 'Tiago', 'João']
let novoPaciente = []

do {
    option = prompt(
        'Lista de pacientes na fila de espera:\n' +
        pacientes[0] + '\n' +
        pacientes[1] + '\n' +
        pacientes[2] + '\n' +

        '\n\nSelecione uma opção:\n' +
        '\n1 - Novo paciente' +
        '\n2 - Consultar paciente' + 
        '\n3 - Sair'
    )

    switch (option) {
        case '1':
            novoPaciente = pacientes.push(prompt('Digite o nome do paciente: '))
            break
    }

} while (option !== '3');

