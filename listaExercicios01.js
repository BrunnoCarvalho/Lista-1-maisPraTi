//Autor: Bruno Vivian Carvalho

const prompt = require('prompt-sync')()

// Menu para seleção das questões

let opcao = Number(prompt("Digite o número da questão a ser executada entre 1 e 15: "))

if(opcao === 1){
    /*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
    utilizando uma estrutura de controle if.*/

    let numero = Number(prompt("Informe um número inteiro: "))

    if(numero % 2 === 0){
        console.log("Número par!")
    }else{
        console.log("Número ímpar!")
    }

}else if (opcao === 2){
    /* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else. */

    let idade = Number(prompt("Informe sua idade: "))

    if(idade <= 12){
        console.log("Criança")
    }else if(idade <= 18){
        console.log("Adolescente")
    }else if (idade <= 59){
        console.log("Adulto")
    }else{
        console.log("Idoso")
    }
}else if (opcao === 3){
    /* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
    "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

    let nota = Number(prompt("Informe a nota de 0 a 10: "))

    if(nota >= 0 && nota <= 10){
        if(nota >= 6){
            console.log("Aprovado!")
        }else if(nota >= 4 && nota < 6){
            console.log("Recuperação")
        }else{
            console.log("Reprovado")
        }
    }else{
        console.log("Informe uma nota válida de 0 até 10")
    }
}else if (opcao === 4){
    /*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
    Utilize switch-case para implementar a lógica de cada opção selecionada.*/

    console.log("Escolha uma das opções do menu: ")
    console.log("1) Pizza")
    console.log("2) Cachorro-quente")
    console.log("3) Sorvete")

    let opcaoEscolhida = Number(prompt())

    switch(opcaoEscolhida){
        case 1: 
            console.log("Você escolheu uma pizza!")
            break;
        case 2:
            console.log("Você escolheu um cachorro-quente!")
            break;
        case 3:
            console.log("Você escolheu um sorvete!")
            break;
        default:
            console.log("Escolha uma opção válida do menu!")
    }
}else if(opcao === 5){
    /*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
    determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
    utilizando if-else.*/

    let peso = Number(prompt("Informe seu peso: "))
    let altura = Number(prompt("Informe sua altura: "))

    let imc = (peso/ (altura * altura))

    if(imc < 18.5){
        console.log("baixo peso")
    }else if(imc <= 24.9){
        console.log("peso normal")
    }else if(imc <= 29.9){
        console.log("sobrepeso")
    }else{
        console.log("obesidade")
    }
}else if(opcao === 6){
    /*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
    formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
    Isósceles, escaleno ou eqüilátero.
    Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

    let ladoA = Number(prompt("Digite o valor para o lado A do triângulo: "))
    let ladoB = Number(prompt("Digite o valor para o lado B do triângulo: "))
    let ladoC = Number(prompt("Digite o valor para o lado C do triângulo: "))

    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){

        if(ladoA === ladoB && ladoB === ladoC){
            console.log('Triângulo equilátero!')
        }else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
            console.log('Triângulo isósceles!')
        }else if (ladoA !== ladoB && ladoB !== ladoC){
            console.log('Triângulo escaleno!')
        }
    }else{
        console.log("Os valores informados para os lados não formam um triângulo! Por favor, digite valores válidos.")
    }
}else if (opcao === 7){
    /*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.*/

    let macas = Number(prompt("Digite quantas maças deseja comprar: "))
    let valorTotal = 0

    if (macas < 1){
        console.log("Digite uma quantia válida de maças")
    }else if(macas < 12){
        valorTotal = macas * 0.30
        console.log(`Valor total da compra R$ ${valorTotal.toFixed(2)}`)
    }else{
        valorTotal = macas * 0.25
        console.log(`Valor total da compra R$ ${valorTotal.toFixed(2)}`)
    }
}else if (opcao === 8){
    /*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    e escreve-los em ordem crescente. */

    let primeiroValor = Number((prompt("Digite o primeiro valor: ")))
    let segundoValor = Number((prompt("Digite o segundo valor: ")))

    if(primeiroValor === segundoValor){
        console.log("Os valores digitados não podem ser iguais!")
    }else if(primeiroValor < segundoValor){
        console.log(`Ordem crescente: ${primeiroValor} - ${segundoValor}`)
    }else{
        console.log(`Ordem crescente: ${segundoValor} - ${primeiroValor}`)
    }

}else if (opcao === 9){
    /*9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
    utilizando um loop for. */

    console.log("Contagem regressiva de 10 até 1: ")
    for(let contagem = 10; contagem > 0; contagem--){
        console.log(`${contagem}`)
    }

}else if (opcao === 10){
    /*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

    let numero = Number(prompt("Digite um valor: "))

    for(let i = 1; i <= 10; i++){
        console.log(`${i} - ${numero}`)
    }

}else if (opcao === 11){
    /*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
    utilizando um loop for. */

    let numero = 0
    let somaTotal = 0

    for(let i = 1 ; i <= 5 ; i ++){
        numero = Number(prompt(`Digite um valor: `))
        somaTotal += numero
    }
    console.log(`Soma total dos 5 números: ${somaTotal}`)

}else if (opcao === 12){
    /*12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
    10) utilizando um loop for. */

    let numero = Number(prompt("Digite um número de 1 a 10: "))
    let resultado  = 0

    console.log(`Tabuada: `)
    for(let i = 1; i <= 10; i++){
        resultado = i * numero
        console.log(`${i} X ${numero} = ${resultado}`) 
    }

}else if (opcao === 13){
    /*13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números. */

    let numero
    let contador = 0
    let somaTotal = 0
    let mediaAritmetica = 0

    do{
        numero =  Number(prompt("Digite um número ou 0 para sair: "))

        if(numero === 0){
            break;
        }else{
            somaTotal += numero
            contador++
        }

    }while(numero !== 0)
    
    if(contador > 0){
        mediaAritmetica = somaTotal / contador
        console.log(`Media Aritmética: ${mediaAritmetica.toFixed(2)}`)
    }else{
        console.log("Digite algum número para calcular a média aritmética")
    }

}else if (opcao === 14){
    /*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
    utilizando um loop for ou while. */

    let numero = Number(prompt(`Digite um número para o cálculo do fatorial: `))
    let fatorial = 1

    if (numero < 0){
        console.log("Digite um valor válido para o cálculo do fatorial.")
    }
    else{
        for (let i = numero; i >= 1; i-- ){
            fatorial *= i 
        }
        console.log(`Resultado do fatorial de ${numero} = ${fatorial}`)
    }

}else if (opcao === 15){
    /*15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
    Fibonacci utilizando um loop for. */
    
    let atual = 1
    let anterior = 1
    let proximo = 0
    for(let i = 1; i <= 10; i++){

        console.log(`${anterior}`)
        proximo = anterior + atual
        if(i === 10){
            break
        }
        anterior = atual
        atual = proximo

    }

    console.log(`Resultado do fibonnaci de 10: ${anterior}`)

}else{
    console.log("Digite uma opção válida!")
}