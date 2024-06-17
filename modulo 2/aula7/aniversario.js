let nome 
let idade
const ano = 2024
let fezAniversario


console.log("qual seu nome?")
process.stdin.once('data', function(data){
   nome = data.toString().trim()

   console.log("qual sua idade")
   process.stdin.once('data', function(data) {
    idade = parseInt(data.toString().trim())
       

   console.log("voce ja fez aniversario este ano?")
process.stdin.once ('data', function(data){
   fezAniversario = data.toString().trim() 
   processamento(nome, idade, fezAniversario)
        process.exit()
})
})

})

function processamento(nome, idade, fezAniversario) {
    if (fezAniversario == "sim" ) {
 fezAniversario = true   
    }   else{
 fezAniversario = false
    }
    if(fezAniversario)  console.log (`Ola voce tem ${idade} e nasceu em ${ano - idade}`)
        else
    { console.log (`Ola voce tem ${idade} e nasceu em ${ano - idade - 1}`)}
}



