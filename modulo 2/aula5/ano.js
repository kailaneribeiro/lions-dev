let nome 
let idade
const ano = 2024

console.log("qual seu nome?")
process.stdin.once('data', function(data){
   nome = data.toString().trim()
   console.log("qual sua idade")


   process.stdin.once('data', function(data) {
    idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
})

})

function processamento(nome, idade) {
     let nascimento = (ano - idade )
     console.log(`olá ${nome} se voce ja fez aniversario, voce nasceu em ${nascimento} se voce nao fez aniversario ${nascimento-1}`)
}

