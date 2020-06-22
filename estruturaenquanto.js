/*
 
 Var
// Seção de Declarações das variáveis 
   nome: caractere
   idade, contador, limite: inteiro

  

   enquanto (contador < limite) faca
   
     escreva (" Digite o nome: ")
     leia (nome)
     escreva ( nome, " qual sua idade: ")
     leia (idade)
     
     Se (idade > 18) entao
        escreval( nome, " é maior de idade")
        senao
            escreval ( nome, " é menor de idade")
     fimse
   contador := contador + 1
   fimenquanto
   */


function acaoBotao(){
   
     var nome, idade, limite, contador
     limite = prompt(" Digite o numero de vezes que a idade será digitada: ")
     contador = 0
     while(contador < limite) {
        nome = prompt(" Digite o nome da pessoa: ")    
        idade = prompt(" Qual sua idade " , nome , " : ")
        if (idade > 18) 
            document.getElementById("paragrafo").innerText = nome + " você é maior de idade "
        else 
            document.getElementById("paragrafo").innerText = nome + " você é menor de idade "
        contador++           
     }  
  }


     






