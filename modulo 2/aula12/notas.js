let nota 


console.log('digite uma nota')
process.stdin.once('data', function(data) {
    nota = parseFloat(data.toString().trim())
    nota = (processamento(nota))
    if (nota == 'A'||nota =='B'|| nota =='C'){
        console.log(`Parabens você foi aprovado com a nota ${nota}`)
    }
    else if(nota == 'D'|| nota == 'F'){
        console.log(`você foi reprovado, com a nota ${nota}`)
    }

    process.exit()
})

function processamento(nota){
    switch (true){
        case (nota >= 90 && nota <= 100):
            return 'A'
        case (nota >= 80 && nota <= 89):
            return 'B'
        case (nota >= 70 && nota <= 79):
            return'C'
        case (nota >= 60 && nota <= 69):
            return 'D'
         case (nota >= 0 && nota <= 59):
            return 'F'
        default:
          console.log("nota invalida")

}
}
