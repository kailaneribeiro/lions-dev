

let numero 
console.log ('digite um numero')
process.stdin.once(`data`, function(data) {
    numero = data.toString().trim()
    processamento (numero)
    process.exit()
})


function processamento(numero){
if (numero ==0) {
console.log('o numero que voce digitou é zero,')
} else if (numero % 2 ==0){
console.log('o numero que voce digitou é par')
}else{
    console.log('o numero que voce digitou é impar')
}
}