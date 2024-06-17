function calculadora(a,b,c){
  
switch (c){
  case '+':
   { return a + b} 
    case '-':
    {return a - b}
    case '*':
    {return a * b}
   case '/':
    {return a/b}
    default:
    console.log("voce digitou algo invalido")
}
}
console.log(calculadora(4,2,'+'))
console.log(calculadora(4,2,'-'))
console.log(calculadora(4,2,'*'))
console.log(calculadora(4,2,'/'))
console.log(calculadora(4,2,'~'))
