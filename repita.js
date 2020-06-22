/*
Seção de Declarações das variáveis 
    sair: caractere
    v1, v2: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   repita
       escreva("Digite o valor 1: ")
       leia (v1)
       escreva("Digite o valor 2: ")
       leia (v2)
       escreval("Resultado da soma é: ", v1+v2)
       escreval("Deseja sair do Loop S/N? ")
       leia (sair)
   ate sair = "N", "n"
*/
function acaoBotao(){
   
    var sair, v1,v2

    do {
       v1= prompt("Digite o valor 1: ")
       v2= prompt("Digite o valor 2: ")
       document.getElementById("paragrafo").innerText = "Resultado da soma é: " + (parseInt(v1)+ parseInt(v2))
       sair=prompt("Deseja sair do Loop S/N? ")
    } while (sair == "N" );
}
    





