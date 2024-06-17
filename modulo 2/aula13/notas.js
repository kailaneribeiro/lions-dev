var notas = [9, 10, 6 ,4, 7, 8, 4, 8 , 9,10]
var soma = 0
var maior = notas[0]
var menor = notas[0]
var acimaDaMedia = 0 
var abaixoDaMedia = 0

for (let i = 0; i < notas.length; i++){
        soma += notas[i]
    }
let media = soma/ notas.length
console.log(`a media das notas é ${media}`)
for (let i = 0; i < notas.length; i++){
    if  (notas[i]> maior){
        maior = notas[i]
    }
    else if (notas[i]< menor){
        menor = notas[i]
    }
    }
    console.log(`a nota maior nota é ${maior} e a nota menor é ${menor}`)
    notas.push(9)
    console.log(`as novas notas são ${notas}`)
for (let i = 0; i < notas.length; i++){
    if (notas[i] >= media){
        acimaDaMedia++
    }
}
console.log(`as notas acima da média são ${acimaDaMedia}`)

for (let i = 0; i < notas.length; i++){
    if (notas[i] < 8.0){
        abaixoDaMedia++
    }
}
console.log(`as notas abaixo da média são ${abaixoDaMedia}`)

