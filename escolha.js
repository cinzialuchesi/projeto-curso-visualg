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
    const operacao = prompt("Digite qual das operações deseja fazer ( +, -, *, /) :");
    const valor1 = prompt("Digite valor 1:");
    const valor2 = prompt("Digite valor 2:");

    function imprimirResultado(resultadoASerImpresso) {
        document.querySelector("p").innerText = ("O resultado de: "+ valor1  + operacao  + valor2  +" = "+ resultadoASerImpresso);
    }

    switch(operacao) {
        case "+":
            const resultadoDaSoma = soma(valor1, valor2)
            imprimirResultado(resultadoDaSoma)
            break;
        case "-": 
            const resultadoDaSubtracao = subtracao(valor1,valor2) 
            imprimirResultado(resultadoDaSubtracao)
            break;
        case "*": 
            imprimirResultado(multiplicacao(valor1,valor2))
            break;
        case "/": 
            imprimirResultado(divisao(valor1,valor2))
            break;
        default:
            console.log('Operação não permitida')
    }
}

// -------

const operacoes = {
    '+': (valor1, valor2) => parseInt(valor1) + parseInt(valor2),
    '-': (valor1, valor2) => parseInt(valor1) - parseInt(valor2),
    '*': (valor1, valor2) => parseInt(valor1) * parseInt(valor2),
    '/': (valor1, valor2) => parseInt(valor1) / parseInt(valor2),
}

function imprimirResultado(resultado) {
    document.querySelector("p").innerText = resultado
}

function acaoBotao2 () {
    const operacaoDoUsuario = prompt("Digite qual das operações deseja fazer (+, -, *, /):");
    if(!Object.keys(operacoes).includes(operacaoDoUsuario)){
        console.log('Operacao nao permitida')
        return
    }

    const valor1 = prompt("Digite valor 1:");
    const valor2 = prompt("Digite valor 2:");
    const operacao = operacoes[operacaoDoUsuario]
    const resultado = operacao(valor1, valor2)
    const mensagem = `O resultado de: ${valor1} ${operacaoDoUsuario} ${valor2} = ${resultado}`;
    imprimirResultado(mensagem)
}
