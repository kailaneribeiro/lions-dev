let opçoes =["pedra","papel","tesoura"]
let escolhaComputador = ""
let escolhaUsuario = ""
let resultado = ""

console.log("pedra, papel ou tesoura ?")
process.stdin.once('data', function(data ) {
    escolhaUsuario =(data.toString().trim())
    processamento()
    process.exit()
})

function processamento(){
escolhaComputador = opçoes[Math.floor(Math.random()* opçoes.length)]
console.log (escolhaComputador)
if (escolhaComputador == escolhaUsuario) {
    console.log('empate')
}
else if (escolhaUsuario == "pedra" && escolhaComputador == "tesoura" || escolhaUsuario == "papel" && escolhaComputador == "pedra" ||
escolhaUsuario == "tesoura" && escolhaComputador == "papel")
{console.log("voce ganhou")}

else{console.log ( 'voce perdeu')}
}