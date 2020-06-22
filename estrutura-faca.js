

function acaoBotao() {

     var numero = prompt(" Digite o numero para calcular a fatorial:  ");
     var fatorial = 1 ;

    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador;        
    }

    document.querySelector("p").innerText=("Resultado fatorial de " + numero + " é: " + fatorial);
     }

