let resposta
let gostaDeCafe 

console.log ('voce gosta de cafe')
process.stdin.once('data', function (data) {
   resposta = data.toString ().trim()
   processamento(resposta)
    process.exit()
})



function processamento(resposta) {
    if (resposta == "sim"){
        gostaDeCafe = true
    } else { gostaDeCafe = false}
    


        if (gostaDeCafe){
    console.log('legal')
         } else {
        console.log('putz')}

    }