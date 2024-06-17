var coresFavoritas = ["preto", "azul", "verde"]
var coresEspeciais = []
var corDoUsuario
console.log("qual a sua cor favorita")
process.stdin.once('data', function(data){
    corDoUsuario = (data.toString().trim())
    processamento(corDoUsuario)
   process.exit()

})




function processamento(corDoUsuario) {
    if ( coresFavoritas.includes(corDoUsuario)){
        console.log("a sua cor favorita é uma das favoritas da turma!")
}
    else {
        console.log("a sua cor favorita é diferente, vamos adicionar a lista!")
        coresEspeciais.push(corDoUsuario)
    }

    console.log(`as cores fovoritas da turma são ${coresFavoritas}`)

    console.log(`a sua cor especial é ${coresEspeciais}`)

console.log(`a quantidade de cores favoritas é ${coresFavoritas.length}`)
}