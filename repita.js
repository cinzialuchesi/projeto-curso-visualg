
function acaoBotao(){
   
    var sair, v1,v2

    do {
       v1= prompt("Digite o valor 1: ")
       v2= prompt("Digite o valor 2: ")
       document.getElementById("paragrafo").innerText = "Resultado da soma é: " + (parseInt(v1)+ parseInt(v2))
       sair=prompt("Deseja sair do Loop S/N? ")
    } while (sair == "N" );
}
    





