var nome = prompt("Digite o nome do aluno: ");
var nota1 = prompt("Digite nota 1: ");
var nota2 = prompt( "Digite nota 2: ");
var media = (Number(nota1) + Number(nota2))/2;

alert(" Media do Aluno " + nome + media);

if (media >= 6) 
    {alert( nome + " Aprovado ") }
else {alert( nome + " Reprovado " )};