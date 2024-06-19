const { parse } = require('path')
const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []
exibirMenu()
function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
	2. listar funcionario
    3. exibir o maior salario
	4. remover
    5. editar
	6. Sair
	`)
	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
            case '2':
                listarFuncionario()
                break
            case '3':
				exibirMaiorSalario()
				break
			case '4':
				remover()
				break
			case '5':
				editar()
				break
            case '6':
            	rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}
function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario)})
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}
function listarFuncionario() {
	if (funcionarios.length == 0){
    console.log('nenhum funcionario cadastrado')
	exibirMenu()
}  else {
for (let i = 0; i < funcionarios.length; i++){
    console.log(funcionarios[i])
}
exibirMenu() 
}
}

function exibirMaiorSalario() {
	if (funcionarios.length == 0){
		console.log('nenhum funcionario cadastrado')
		exibirMenu()
}  else {
    let maiorSalario = funcionarios[0]
	for (let i = 0; i < funcionarios.length; i++){
		if (funcionarios[i].salario > maiorSalario.salario){
			maiorSalario = funcionarios[i]
		}
    }
	console.log(maiorSalario)
	exibirMenu()
}
}

function remover(){
	if(funcionarios.length === 0){
       Console.log('Nehum funcionario cadastrado')
	   exibirMenu()
	}else{ console.log(funcionarios)
		funcionarios.forEach((funcionarios, index) => {
			console.log(`${index + 1}. ${funcionarios.nome}`)
		})
		rl.question('digite qual funcionario voce deseja remover:',(numero)=>  {
			const index = parseInt(numero) -1
			if (numero  >0 && numero <= funcionarios.length){
				funcionarios.splice(numero, 1)
				console.log('elemento removido com sucesso!')
				exibirMenu()        
			} else {console.log("numero ívalido, tente novamente")
			exibirMenu()
			}
		})
	}
}


function editar(){
	if(funcionarios.length === 0){
		Console.log('Nehum funcionario cadastrado')
		exibirMenu()
	}else {
		console.log('lista de funcionarios')
		funcionarios.forEach((funcionarios, index ) =>{
			console.log(`${index +1}. ${funcionarios.nome}`)
		})
		rl.question('digite um numero que deseja editar:', (numero)=>{
			const index  = parseInt(numero) -1
			if 
		(numero >0 && numero <= funcionarios.length){
			const funcionario = funcionarios[index]
			rl.question(`novo nome :`, (novoNome)=>{
			rl.question(`novo cargo :`, (novoCargo)=>{	
			rl.question(`novo salario :`, (novoSalario)=>{	
				funcionarios[index] = {
					nome: novoNome || funcionarios.nome, 
					cargo: novoCargo || funcionarios.cargo, 
					salario: parseFloat(novoSalario) || funcionarios.salario
				}
		console.log(" Funcionaros editado com sucesso!")
		exibirMenu()
		    })
		  })
		})
	    }else{
			console.log('numero invalido tente novamente')
			exibirMenu()
		}
	  })
	}
   }

console.log("primeiro uso do git")
