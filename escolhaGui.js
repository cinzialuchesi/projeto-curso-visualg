

function soma(valor1, valor2){
   return parseInt( valor1 ) + parseInt( valor2 )
}
function subtracao(valor1, valor2){
    return parseInt( valor1 ) - parseInt( valor2 )
}

 function multiplicacao(valor1, valor2){
    return parseInt( valor1 ) * parseInt( valor2 )
}
 function divisao(valor1, valor2){
    return parseInt( valor1 ) / parseInt( valor2 )
}

function acaoBotao() {

    var operacao = prompt ( " Digite qual das operações deseja fazer ( +, -, *, /) : ");
    var valor1 = prompt ( " Digite valor 1: ");
    var valor2 = prompt ( " Digite valor 2: ");
    const resultado = 0

    function imprimirresultado(resultadoimpresso)
    {
        document.querySelector("p").innerText =("O resultado de: "+ valor1  + operacao  + valor2  +" = "+ resultadoimpresso);
     }

switch(operacao) {
    case "+":
        resultado = soma(valor1,valor2)
        break;
    case "-": 
    resultado = Subtracao(valor1,valor2) 
    break;
    case "*": 
        resultado = multiplicacao(valor1,valor2) 
        break;
    case "/": 
        resultado = divisao(valor1,valor2) 
    break;
   
}
}