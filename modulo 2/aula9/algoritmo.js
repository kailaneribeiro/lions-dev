var tabuada
var i
console.log ('escolha uma tabuada')
process.stdin.once('data', function(data) {
    tabuada = parseInt(data.toString().trim())
    processamento (tabuada)
    process.exit()
})



function processamento (tabuada) {
    for(i = 0; i <= 100; i++ ) {
       
        console.log(`${tabuada} x ${i} = ${tabuada * i}`)
    }
}



