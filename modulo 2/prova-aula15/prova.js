let notas= [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]

let soma = 0
let media = 0 
let notaMaxima = notas[0]
let notaMinima =notas[0]
let acimaDaMedia = 0
let reprovados = 0

for(let i=0; i < notas.length; i++){
    soma+= notas[i]
}
media= soma/notas.length
console.log(`A  media é ${media}`)

for(let i=0; i < notas.length; i++){
    if(notas[i]> notaMaxima){
        notaMaxima = notas[i]
    }
else if (notas[i] < notaMinima){
    notaMinima  = notas[i]
}
}
console.log(`a maior nota é ${notaMaxima} e a menor nota é ${notaMinima}`)

for(let i=0; i < notas.length; i++){
    if(notas[i]> media ){
        acimaDaMedia ++
    }
}
console.log(`A quantidade de notas acima da media são ${acimaDaMedia}`)
 
notas.push(8.0)
console.log(` As novas notas são ${notas}`)

for(let i=0; i < notas.length; i++){
    if(notas[i]< 6.0){
        reprovados ++
    }
}
console.log(`foram reprovadas ${reprovados} notas`)