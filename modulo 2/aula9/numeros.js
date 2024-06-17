var somaPares = 0
var somaImpares = 0
var totalPares = 0
var totalImpares = 0
var mediaPares = 0
var mediaImpares = 0



for (let i = 0; i <= 999; i++){
    if (i % 2==0) {
        somaPares += i
        totalPares++
    } else {
        somaImpares += i
        totalImpares++
    }
}

mediaPares = somaPares/ totalPares
mediaImpares = somaImpares/ totalImpares
console.log (`a soma dos numeros pares é ${somaPares}`)
console.log (`a soma dos numeros impares é ${somaImpares}`)
console.log (` o total dos numeros pares é ${totalPares}`)
console.log (` o total dos numeros impares é ${totalImpares}`)
console.log(`a media dos pares é ${mediaPares}`)
console.log(`a media dos impares é ${mediaImpares}`)
  
if (mediaPares > mediaImpares){
    console.log("a media dos numeros pares é maior")

} else {
    console.log (" a media dos numeros impares  é maior")}

