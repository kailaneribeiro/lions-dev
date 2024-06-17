let nome 
let idade


console.log('qual o seu nome?')
process.stdin.once('data', function(data){
    nome = data.toString().trim()
    console.log('qual a sua idade?')

    process.stdin.once('data', function(data) {
        idade = data.toString().trim()
        processamento(nome, idade)
        process.exit()
    })
})



function processamento(nome, idade){
    if (idade >= 18) 
       { console.log(`${nome},Voce é maior de idade`) }
    else
    {let calculo = (18 - idade)

console.log(`voce nao é maior de idade, falta ${calculo} anos para voce ficar de maior`)}
}



    
