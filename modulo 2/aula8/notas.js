let prova1
let prova2
let notas = []
let calculo = (notas[0] + notas[1]) / 2
console.log("qual a nota para a primeira nota?")
process.stdin.once('data', function(data) {
    prova1 = parseFloat(data.toString().trim())
       
    console.log('qaul a nota para a segunda nota?')
    process.stdin.once('data', function(data) {
        prova2= parseFloat(data.toString().trim())
           
    processamento(prova1, prova2)
        process.exit()
    })
})

        function processamento(prova1, prova2) {
            notas.push(prova1, prova2)
       console.log(`a média das provas é ${calculo}`)
        }

