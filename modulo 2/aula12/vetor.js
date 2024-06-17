var numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var impar = []

for (let i = 0; i <= numeros.length; i++ ) {
    if (numeros[i] % 2 != 0){
        impar.push(numeros[i])
    }
}
console.log(`${impar}`)