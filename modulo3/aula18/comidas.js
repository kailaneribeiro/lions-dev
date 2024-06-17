const readline = require ('readline')

const rl =  readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
let comidas =[]
exibirMenu()
function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar comida
	2. listar comida
	3. editar
    4. remover
	5. Sair
	`)
    rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarComida()
				break
            case '2':
                listarComida()
                break
            case '3':
				editarComida()
				break
			case '4':
				remover()
				break
			case '5':
				editar()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarComida(){
    rl.question( 'digite o nome de uma comida:', (nome) => {
    rl.question('digite a cor dessa comida:', (cor) => {
    rl.question('digite o tipo dessa comida:', (tipo) => {
        comidas.push({nome:nome, cor:cor, tipo:tipo})
        console.log('Comida cadastrada com sucesso!')
        exibirMenu()
         })
      })
   })
}

function listarComida(){
    if(comidas.length ===0){
        console.los('Nenhuma comida cadastrada')
        exibirMenu()
    }else{for (let i = 0; i < comidas.length; i++){
        console.log(comidas[i])
    }
    exibirMenu() 
    }
    }

function editarComida(){
    if(comidas.length ===0){
        console.los('Nenhuma comida cadastrada')
        exibirMenu()
    }else{
        console.log(' Lista de comidas')
        comidas.forEach((comidas, index)=>{
            console.log(`${index +1}.${comidas.nome}`)
        })
        rl.question('Digite um numero da comida que deseja editar:',(numero)=>{
			const index  = parseInt(numero) -1
			if 
		(numero >0 && numero <= comidas.length){
            const comida = comidas[index]
            rl.question(`novo nome :`, (novoNome)=>{
                rl.question(`nova cor :`, (novaCor)=>{	
                rl.question(`novo tipo :`, (novoTipo)=>{	
                    comidas[index] = {
                        nome: novoNome || comidas.nome, 
                        cor: novaCor || comidas.cor, 
                        tipo: novoTipo || comidas.tipo
                    }
            console.log(" Comidas editadas com sucesso!")
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

function remover(){
    if(comidas.length===0){
        console.los('Nenhuma comida cadastrada')
        exibirMenu()
    }else{
        console.log(comidas)
        comidas.forEach((comidas, index) => {
			console.log(`${index + 1}. ${comidas.nome}`)
		})
        rl.question('Digite qual o numero da comida que voce deseja remover:',(numero)=>{
            const index = parseInt(numero) -1
            if (numero  >0 && numero <= comidas.length){
				comidas.splice(numero, 1)
				console.log('elemento removido com sucesso!')
				exibirMenu()        
			} else {console.log("numero ívalido, tente novamente")
			exibirMenu()
			}
		})
	}
}






        
    








