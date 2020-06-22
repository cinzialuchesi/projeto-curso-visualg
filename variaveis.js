
var nome = prompt("Qual seu nome ?");
var nota = prompt("qual a Nota 1 : ");
var nota1 = prompt("qual a Nota 2 : ");
var media = (Number(nota) + Number (nota1))/2;
var resultado = "";

if(media <6){resultado=" Reprovado "}else{resultado=" Aprovado "};
alert("Nome " + nome);
alert("Media " + media);
alert(" Resultado " + resultado);
