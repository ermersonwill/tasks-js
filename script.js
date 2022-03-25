// ESTRUTURA SEQUENCIAL:


    // 1- Primeira task) Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console


    // let nome = (prompt("Digite seu nome"));
    // alert("Seu nome é " + nome);
    // console.log(nome);


 // ___________________________________________________________________________________________


    // 2- Segunda task) Crie um script que leia do usuário dois números e mostre a soma desses dois números.


    // let num1 = parseInt(prompt("Digite um numero"));
    // let num2 = parseInt(prompt("Digite outro numero"));
    // console.log(num1 + num2);


// _____________________________________________________________________________________________


    // 3- Terceira task) Crie um script que leia duas notas do usuário e calcule a média do aluno.


    // let nota1 = parseInt(prompt("Digite sua primeira nota"));
    // let nota2 = parseInt(prompt("Digite sua segunda nota"));
    // console.log((nota1 + nota2)/2);


// _____________________________________________________________________________________________


    // 4- Quarta task) Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele. 


    // let anoNascimento = parseInt(prompt("Digite o ano que você nasceu"));
    // console.log(2022 - anoNascimento);


// _____________________________________________________________________________________________


    // 5- Quinta task) Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.


    // let salarioHora = parseInt(prompt("Digite quanto vc recebe por hora"));
    // let horaMes = parseInt(prompt("Digite quantas horas vc trabalhou esse mes"));
    // console.log(salarioHora * horaMes);


// _____________________________________________________________________________________________


    // 6- Sexta task) Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.    C = 5 * ((F-32) / 9).


    // let temperaturaFah = parseFloat(prompt("DIigite a temperatura em farhrenheit"));
    // console.log (((temperaturaFah - 32) * 5)/9);


// _____________________________________________________________________________________________


// EXTRUTURA DE DECISÃO:

    // 1- Primeira task) Faça um Programa que peça dois números e imprima o maior deles.


    // let num1 = (prompt("Digite um numero"));
    // let num2 = (prompt("Digite outro numero"));

    // if(num1 > num2){
    //     console.log(num1);
    // } else {
    //     console.log(num2);
    // }


// _____________________________________________________________________________________________


    // 2- Segunda task) Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.


    // let num = (prompt("Digite um numero"));

    // if(num >= 0) {
    //     alert("O numero é positivo");
    // } else {
    //     alert("O numero é negativo");
    // }


// _____________________________________________________________________________________________


    // 3- Terceira task) Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.


    // let sexo = (prompt("Digite M ou F para indicar seu sexo"));

    // if(sexo == "m") {
    //     alert("Seu sexo é masculino");
    // } 
    // else if(sexo == "f") {
    //     alert("Seu sexo é feminino");
    // } else {
    //     alert("Sexo invalido");
    // }


// ____________________________________________________________________________________________


    // 4- Quarta task) Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
        // 1.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
        // 2.	A mensagem "Reprovado", se a média for menor do que sete;
        // 3.	A mensagem "Aprovado com Distinção", se a média for igual a dez.


    // let nota1 = parseInt(prompt("Digite sua primeira nota"));
    // let nota2 = parseInt(prompt("Digite sua segunda nota"));
    // let media = ((nota1 + nota2)/2);

    // if(media >= 7 && media < 10){
    //     alert("Aprovado");
    // }
    // else if(media < 7 && media == 0){
    //     alert("Reprovado");
    // }
    // else if(media == 10) {
    //     alert("Aprovado com Distinção");
    // }else{
    //     alert("Nota invalida");
    // }


// ____________________________________________________________________________________________


    // 5- Quinta task) Faça um Programa que leia três números e mostre o maior e o menor deles.


    // let num1 = parseInt(prompt("Digite um numero"));
    // let num2 = parseInt(prompt("Digite um numero"));
    // let num3 = parseInt(prompt("Digite um numero"));
    // let maior = (num1);
    // let menor 

    // if(num2 > num1 && num2 > num3) {
    //     maior = (num2);
    // }
    // else if(num3 > num1 && num3 > num2){
    //     maior = (num3);
    //     menor = (num1);
    // }
    // else if(num2 < num1 && num2 < num3){
    //     menor = (num2);
    // }
    // else if(num3 < num1 && num3 < num2){
    //     menor = (num3);
    // }
    // alert("Maior numero é " +maior);
    // alert("Menor numero é " +menor);


// ____________________________________________________________________________________________


    // 6- Sexta task) Faça um Programa que leia dois números e mostre se ele é par ou ímpar.


    // let num1 = parseInt(prompt("Digite um numero"));
    // let num2 = parseInt(prompt("Digite outro numero"));
    // let par
    // let impar
    // let par1
    // let impar1


    // if(num1 % 2 == 0 ) {
    //     par = (num1);
    // }else {
    //     impar = (num1);
    // }
    // if(num2 % 2 == 0 ) {
    //     par1 = (num2);
    // }else {
    //     impar1 = (num2);
    // }
    // if(num1 == par){
    //     alert("o numero é par");
    // }else {
    //     alert("O numero é impar");
    // }
    // if(num2 == par1){
    //     alert("o numero é par");
    // }else {
    //     alert("O numero é impar");
    // }


// ___________________________________________________________________________________________


//ESTRUTURAS DE REPETIÇÃO: 

    // 1- Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.


     // while(true){
     // let nota = parseFloat(prompt("Digite sua nota(entre zero e dez"))
     //     if(nota >= 0 && nota <= 10){
     //         break;
     //     } else alert("Valor inválido. Tente novamente.")
     // }

        
 // __________________________________________________________________________________________


     // 2- Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.


     // let loginNome = prompt("Digite um nome de usuário");
    // let loginSenha = prompt("Digite uma senha");

    //     if(loginNome != loginSenha){
    //         alert("Login realizado");
    //         break;
    //     } else alert("Erro tente novamente")
    // }


// ____________________________________________________________________________________________


    // 3- Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro.


    // for(let i = 0; i <= 20; i++){
    //     console.log(i)
     // }


// ____________________________________________________________________________________________


    // 4- Faça um programa que leia 5 números e informe o maior número.


    // let maior
    // for(let i = 0; i < 5; i++){
    //     let num = parseInt(prompt("Digite um numero"))
    //         if(i === 0){
    //         maior = num
    //     }
    //         if(num > maior){
    //         maior = num
    //     }
    // }
    // console.log("O maior numero é " + maior)


// ____________________________________________________________________________________________


    // 5- Faça um programa que leia 5 números e informe a soma e a média dos números.


    // let soma = 0
    // for(let i = 0; i < 5; i++){
    //     let num = parseInt(prompt("Digite um numero"))
    //     soma += num
    // }
    // console.log(soma)
    // console.log(soma / 5)


// _____________________________________________________________________________________________


    // 6- Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.


    // for(let i = 0; i < 50; i++){
    //     if(i % 2 != 0){
    //         console.log(i)
    //     }
    // }


// _____________________________________________________________________________________________


    // 7- Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
    // a.	Tabuada de 5:
    // b.	5 X 1 = 5
    // c.	5 X 2 = 10
    // d.	...
    // e.	5 X 10 = 50


    // let num = parseInt(prompt("Digite um numero"))
    // for(let i = 1; i <= 10; i++){
    //     console.log(num + " x " + i + " = " + num * i)
    // }


// _____________________________________________________________________________________________________


//DESAFIO FIZZBUZZ:


    // Dado um número n, para cada número entre 1 e 100, imprime um valor por linha da seguinte maneira:
    // Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
    // Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
    // Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
    // Se i não for múltiplo de 3 ou 5, imprima o valor de i.


    // for(let i = 1; i < 100; i++){
    //     if(i % 5 === 0 && i % 3 === 0){
    //         console.log("FizzBuzz")
    //     }
    //     else if(i % 3 === 0){
    //         console.log("Fizz")
    //     }
    //     else if(i % 5 === 0){
    //         console.log("Buzz")
    //     } else console.log(i)
    // }


// ____________________________________________________________________________________________

// LISTAS:


    // 1- Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.


    // let num = [1, 2, 3, 4, 5]
    // console.log(num)


// _____________________________________________________________________________________________


    // 2- Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.


    // let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // for(let i = num.length;i > 0; i--){
    //     console.log(i)
    // }


// _____________________________________________________________________________________________


// FUNÇÃO:

    // 1- Crie uma função que receba um inteiro e diga se ele é “Par” para números pares ou “Ímpar” para números impares.


    // function parImpar(num){
    //     if(num % 2 === 0){
    //         console.log("numero é par")
    //     } else console.log("numero é impar")
    // }
    // let numero = parseInt(prompt("Digite um numero"));
    // parImpar(numero)


// _____________________________________________________________________________________________


    // 2- Crie uma função que receba dois números e retorne o resultado da soma entre eles. 


    // function soma(num1 , num2){
    // console.log(num1 + num2);
    // }
    // soma(2, 9)


// _____________________________________________________________________________________________


    // 3- Crie uma função que receba um número e retorne o oposto desse número. Exemplos de retornos:
    // negativo(1) // return -1
    // negativo(-5) // return 5


    // function numero(num){
    // console.log(num *(-1));
    // }
    // numero(5)

    
// _____________________________________________________________________________________________


    // 4- Crie uma função que receba um array de números, e retorne a suma de todos os números positivos desse array. Exemplos de retornos:
    // somaDePositivos([1,-4,7,12]) // 1 + 7 + 12 = 20 -> return 20


    // function numPositivos(numeros){
    // let soma = 0

    // for(let i = 0; i < 4 ;i++){
    //  if(parseInt(numeros[i])> 0)
    //      soma += (parseInt(numeros[i]));
    // }
    // console.log("A soma desses numeros da " + soma);
    // return
    // }
    // numPositivos([1, -4, 7, 12])
    // numPositivos([20,-9,-2,10])