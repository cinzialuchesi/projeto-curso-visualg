
function acaoBotao() {

var operacao = prompt ( " Digite qual das operações deseja fazer ( +, -, *, /) : ");
var valor1 = prompt ( " Digite valor 1: ");
var valor2 = prompt ( " Digite valor 2: ");
var resultado = ""

if (operacao == "+") {
    resultado = parseInt( valor1 ) + parseInt( valor2 )} 
   else if (operacao == "-" ) {
       resultado = parseInt( valor1 ) - parseInt( valor2 )}
      else if (operacao == "*") {
          resultado = parseInt( valor1 ) * parseInt( valor2 )} 
          else if (operacao == "/") {
              resultado = parseInt( valor1 ) / parseInt( valor2 )}

document.querySelector("p").innerText =("O resultado de: "+ valor1  + operacao  + valor2  +" = "+ resultado);
}

