
/* Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite nota 1: ")
   leia(nota1)
   escreval("Digite nota 2: ")
   leia(nota2)
   media := (nota1 + nota2) / 2
  se media <= 5 entao
    escreval ("Reprovado ", nome )
  senao
    escreval ("Aprovado ", nome)
  fimse */

var nome = prompt("Digite o nome do aluno: ");
var nota1 = prompt("Digite a nota 1: ");
var nota2 = prompt("Digite a nota 2: ");
media = (nota1 + nota2) /2

if(media >= 6){
   alert ("Aprovado " + nome)}
else 
   alert ( "Reprovado " + nome)
