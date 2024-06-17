var numeros =[27, 10, 3, 0, 20, 5, 6, 3]
var impar = []
var par = []
numeros.push(19)
for (let i = 0; i <= numeros.length; i++ ) {
    if (numeros[i] % 2 != 0){
        impar.push(numeros[i])
    }
    
    else if(numeros[i] % 2 == 0){
        par.push(numeros[i])
    }
}


console.log(`os numeros impares são ${impar}`)
console.log(`os numeros pares são ${par}`)