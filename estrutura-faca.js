/*
Var
  numero, fatorial, contador: inteiro

Inicio

  escreva ("Digite o numero para calcular a fatorial: ")
  leia (numero)
  
  fatorial :=1
  
  para contador de 1 ate numero faca
      fatorial := fatorial * contador
  fimpara
  
  escreva ("Resultado fatorial de ", numero, " é: ", fatorial)
  
*/


function acaoBotao() {

     var numero = prompt(" Digite o numero para calcular a fatorial:  ");
     var fatorial = 1 ;

    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador;        
    }

    document.querySelector("p").innerText=("Resultado fatorial de " + numero + " é: " + fatorial);
     }

