/*
Var
// Seção de Declarações das variáveis 
    Nome : caractere
    numero : real
    
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreval("Digite seu nome: ")
    leia (nome)
    escreval("Digite um numero: ")
    leia (numero)
    
    escreval(nome, " : ", numero)

Fimalgoritmo

*/
var nome = prompt ("Digite seu nome; ");
var numero = prompt ("digite um numero: ");

document.getElementById("paragrafo").innerText = nome + " : " + numero 