// Exercicio 1
/*
const prompt = require('prompt-sync')();

let texto = "abacate";
// Conferindo se é de fato um número inteiro
do {
	texto = prompt("Informe um número inteiro válido para a temperatura em Celsius!");
} while (!/^-?\d+$/.test(texto));
// Fazendo os tratamentos e checagens necessários e retornando a resposta
let temperaturaCelsius = parseInt(texto);
if (temperaturaCelsius < -273){
	console.log("A temperatura não pode ser convertida, pois -273,15°C é igual ao zero absoluto, 0 Kelvin. Não existe temperatura mais baixa.");
} else{
	let temperaturaFahrenheit = temperaturaCelsius * (9/5) + 32;
	console.log(temperaturaFahrenheit + " °F");
}
//*/
// Exercicio 1


// Exercicio 2
/*
const prompt = require('prompt-sync')();

let texto = "abacate";

// Conferindo se é de fato um número inteiro
do {
	texto = prompt("Informe um número inteiro válido para o número de eleitores: ");
	// console.log(texto);
} while (!/^\d+$/.test(texto));
// Fazendo os tratamentos
let numeroEleitores = parseInt(texto);

texto = "abacate";

// Conferindo se é de fato um número inteiro
do {
	texto = prompt("Informe um número inteiro válido para o número de votos brancos: ");
	// console.log(texto);
} while (!/^\d+$/.test(texto));
// Fazendo os tratamentos
let numeroVotosBrancos = parseInt(texto);

texto = "abacate";

// Conferindo se é de fato um número inteiro
do {
	texto = prompt("Informe um número inteiro válido para o número de votos nulos: ");
	// console.log(texto);
} while (!/^\d+$/.test(texto));
// Fazendo os tratamentos
let numeroVotosNulos = parseInt(texto);

texto = "abacate";

// Conferindo se é de fato um número inteiro
do {
	texto = prompt("Informe um número inteiro válido para o número de votos válidos: ");
	// console.log(texto);
} while (!/^\d+$/.test(texto));
// Fazendo os tratamentos e checagens necessários e retornando a resposta
let numeroVotosValidos = parseInt(texto);


if (numeroEleitores < (numeroVotosBrancos+numeroVotosNulos+numeroVotosValidos)){
	console.log("A porcentagem não pode ser calculada, já que o número de votos total é maior que o número de eleitores!");
} else{
	console.log(`O percentual de votos brancos é de ${numeroVotosBrancos/numeroEleitores*100}%;`);
	console.log(`O percentual de votos nulos é de ${numeroVotosNulos/numeroEleitores*100}%;`);
	console.log(`O percentual de votos válidos é de ${numeroVotosValidos/numeroEleitores*100}%;`);
	console.log(`O percentual de pessoas não votantes é de ${(numeroEleitores - numeroVotosValidos - numeroVotosNulos - numeroVotosBrancos)/numeroEleitores*100}%.`)
}
// */
// Exercicio 2

// Exercicio 3
/*
const prompt = require('prompt-sync')();

let texto = "abacate";

// Conferindo se é de fato um número inteiro
do {
	texto = prompt("Informe um número inteiro válido: ");
	// console.log(texto);
} while (!/^-?\d+$/.test(texto));
let numero1 = parseInt(texto);

texto = "abacate";

// Conferindo se é de fato um número inteiro
do {
	texto = prompt("Informe um segundo número inteiro válido: ");
	// console.log(texto);
} while (!/^-?\d+$/.test(texto));
let numero2 = parseInt(texto);

texto = "abacate";

// Conferindo se é de fato um número inteiro
do {
	texto = prompt("Informe um terceiro número inteiro válido: ");
	// console.log(texto);
} while (!/^-?\d+$/.test(texto));
let numero3 = parseInt(texto);

let numero4 = numero1+numero2+numero3;
numero1 += 25;
numero2 *= 3;
// Aqui não fiz questão de manter como um inteiro pq não foi expressamente solicitado isso no enunciado
numero3 *= (12/100);


console.log(`O primeiro número após tratado é ${numero1};`);
console.log(`O segundo número após tratado é ${numero2};`);
console.log(`O terceiro número após tratado é ${numero3};`);
console.log(`A soma dos 4 números originais é ${numero4}.`)
//*/
// Exercicio 3

// Exercicio 4
/*
const prompt = require('prompt-sync')();

let texto = "abacate";

// Conferindo se é de fato um número
do {
	texto = prompt("Informe um número válido (use ponto para número de ponto flutuante): ");
	// console.log(texto);
} while (!/^-?\d+(\.\d+)?$/.test(texto));
let nota1 = parseFloat(texto);

texto = "abacate";

// Conferindo se é de fato um número
do {
	texto = prompt("Informe um segundo número válido (use ponto para número de ponto flutuante): ");
	// console.log(texto);
} while (!/^-?\d+(\.\d+)?$/.test(texto));
let nota2 = parseFloat(texto);

let media = (nota1+nota2)/2;
if (media >= 6){
	console.log(`Média semestral igual a ${media}. PARABÉNS! Você foi aprovado!`)
}else {
	console.log(`Média semestral igual a ${media}. Você foi REPROVADO! Estude mais.`)
}
// */
// Exercicio 4

// Exercicio 5
/*
const prompt = require('prompt-sync')();

let texto = "abacate";

// Conferindo se é de fato um número
do {
	texto = prompt("Informe um número válido (use ponto para número de ponto flutuante): ");
	// console.log(texto);
} while (!/^-?\d+(\.\d+)?$/.test(texto));
let nota1 = parseFloat(texto);

texto = "abacate";

// Conferindo se é de fato um número
do {
	texto = prompt("Informe um segundo número válido (use ponto para número de ponto flutuante): ");
	// console.log(texto);
} while (!/^-?\d+(\.\d+)?$/.test(texto));
let nota2 = parseFloat(texto);

let media = (nota1+nota2)/2;
if (media >= 6){
	console.log(`Média semestral igual a ${media}. PARABÉNS! Você foi aprovado!`)
}else {
	console.log(`Média semestral igual a ${media}. Você foi REPROVADO! Estude mais.`)
}
// */
// Exercicio 5

// Exercicio 6
/*
const prompt = require('prompt-sync')();

let texto = "abacate";

// Conferindo se é de fato um número
do {
	texto = prompt("Informe um número válido para o tamanho do primeiro lado (use ponto para número de ponto flutuante): ");
} while (!/^-?\d+(\.\d+)?$/.test(texto));
let lado1 = parseFloat(texto);

texto = "abacate";

// Conferindo se é de fato um número
do {
	texto = prompt("Informe um número válido para o tamanho do primeiro lado (use ponto para número de ponto flutuante): ");
} while (!/^-?\d+(\.\d+)?$/.test(texto));
let lado2 = parseFloat(texto);


texto = "abacate";

// Conferindo se é de fato um número
do {
	texto = prompt("Informe um número válido para o tamanho do primeiro lado (use ponto para número de ponto flutuante): ");
} while (!/^-?\d+(\.\d+)?$/.test(texto));
let lado3 = parseFloat(texto);


if ((lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado3 + lado2 > lado1)){
	if (lado1 == lado2 && lado2 == lado3){
		console.log("É um triângulo equilátero!");
	} else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
		console.log("É um triângulo isósceles!");
	}
	else{
		console.log("É um triângulo escaleno!")
	}
}
else {
	console.log("Não é um triângulo!");
}
// */
// Exercicio 6

// Exercicio 7
/*
const prompt = require('prompt-sync')();

let texto = "abacate";

// Conferindo se é de fato um número inteiro
do {
	texto = prompt("Informe um número válido para a quantidade de maçãs: ");
} while (!/^\d+$/.test(texto));
let numeroMacas = parseInt(texto);

let valor;
const unitario1 = 0.3;
const unitario2 = 0.25;

// Fazendo os tratamentos
if ((numeroMacas >= 12)){
	valor = unitario2 * numeroMacas;
}
else {
	valor =unitario1 * numeroMacas;
}
console.log(`O valor é R$ ${valor}`);
// */
// Exercicio 7

// Exercicio 8
/*
const prompt = require('prompt-sync')();

let texto = "abacate";

// Conferindo se é de fato um número
do {
	texto = prompt("Informe um número válido (use ponto para número de ponto flutuante): ");
} while (!/^-?\d+(\.\d+)?$/.test(texto));
let numero1 = parseFloat(texto);

// Conferindo se é de fato um número
do {
	texto = prompt("Informe um segundo número válido (use ponto para número de ponto flutuante): ");
} while (!/^-?\d+(\.\d+)?$/.test(texto));
let numero2 = parseFloat(texto);

// Fazendo os tratamentos
if(numero1 >= numero2){
	console.log(`Os números informados em ordem crescente são ${numero2} e ${numero1}`);
}
else {
	console.log(`Os números informados em ordem crescente são ${numero1} e ${numero2}`);
}
// */
// Exercicio 8

// Exercicio 9
/*
const prompt = require('prompt-sync')();

let texto = "abacate";

// Conferindo se é de fato um número inteiro
do {
	console.log("Informe um número inteiro válido para o código:\n1- Sul\n2- Norte\n3- Leste\n4- Oeste\n5 ou 6- Nordeste\n7,8 ou 9- Sudeste\n10 até 20- Centro-Oeste\n25 até 50- Nordeste\nFora do intervalo serão considerados produtos importados;\n");
	texto = prompt();
} while (!/^\d+$/.test(texto));
let codigo = parseInt(texto);
let regiao = "Produto importado";

// Verificando as condições
switch (codigo) {
	case 1: {
		regiao = "Sul";
		break;
	}

		case 2 :{
			regiao = "Norte";
			break;
		}

		case 3 :{
			regiao = "Leste";
			break;
		}

		case 4 :{
			regiao = "Oeste";
			break;
		}

		case 7: case 8: case 9 :{
			regiao = "Sudeste";
			break;
		}
	default:
		if ((codigo >= 5 && codigo <= 6) || (codigo >=25 && codigo <= 50)){
			regiao = "Nordeste"
		}
		else if ((codigo >=10 && codigo <= 20)){
			regiao = "Centro-Oeste"
		}
		break;
}

// Fazendo os tratamentos para impressão

if (regiao == "Produto importado"){
	console.log("O produto é importado!")
}
else {
	console.log(`A região do produto é ${regiao}`);
}
// */
// Exercicio 9

// Exercicio 10
/*
const prompt = require('prompt-sync')();

let texto = "abacate";

// Conferindo se é de fato um número inteiro
do {
	texto = prompt("Informe um número inteiro válido! ");
} while (!/^-?\d+$/.test(texto));
let numero = parseInt(texto);

let contador = 0;
while (contador < 10){
	console.log(numero);
	contador++;
}
// */
// Exercicio 10

// Exercicio 11
/*
const prompt = require('prompt-sync')();

let texto = "abacate";
let numero;
do {
	do {
		texto = prompt("Informe um número inteiro válido! Ou 0 ou negativo para parar. ");
	} while (!/^-?\d+$/.test(texto));
	numero = parseInt(texto);
	// Encerrando imediatamente o programa, sem imprimir nada, conforme requisitado no enunciado
	if (numero <= 0){
		break;
	}
	if (numero % 2 == 0){
		console.log("Valor PAR!")
	}else {
		console.log("Valor ÍMPAR!")
	}

} while (numero > 0);
// */
// Exercicio 11

// Exercicio 12
/*
let numero = 1000;
do {
	if (numero % 11 == 5){
		console.log(numero);
	}
	// console.log(numero);
	numero++;
} while (numero < 2000);
// */
// Exercicio 12

// Exercicio 13
/*
const prompt = require('prompt-sync')();

let texto = "abacate";
let contador = 0;
let numero;
do {
	do {
		texto = prompt("Informe um número inteiro válido! ");
	} while (!/^-?\d+$/.test(texto));
	numero = parseInt(texto);
	let contador2 = 1;
	do {
		console.log(`${contador2} x ${numero} = ${numero*contador2}`);
		contador2++;
	} while (contador2 < numero+1);
	contador++;
} while (contador < 5);
// */
// Exercicio 13

// Exercicio 14
/*
const prompt = require('prompt-sync')();

let texto = "abacate";
let contador = 0;
let numero;
let soma = 0;
while (numero != 0) {
	// Verificando número digitado
	do {
		texto = prompt("Informe um decimal válido! Ou informe 0 para parar o programa! ");
	} while (!/^-?\d+(\.\d+)?$/.test(texto))
	numero = parseFloat(texto);
	if (numero == 0){
		break;
	}
	soma += numero;
	contador++;
}
if (contador>0){
	console.log("A média é: " + soma/contador);
}
else{
	console.log("Nenhum valor foi adicionado!");
}
// */
// Exercicio 14

// Exercicio 15
/*
const prompt = require('prompt-sync')();

let texto = "abacate";
let contador = 0;
let numero;
let peso;
let soma = 0;
while (numero != 0) {
	// Verificando número digitado
	do {
		texto = prompt("Informe um decimal válido! Ou informe 0 para parar o programa! ");
	} while (!/^-?\d+(\.\d+)?$/.test(texto))
	numero = parseFloat(texto);
	if (numero == 0){
		break;
	}
	texto = "abacate";
	do {
		texto = prompt("Informe o PESO! ");
		// console.log(texto);
	} while (!/^\d+$/.test(texto));
	peso = parseInt(texto);
	soma += numero*peso;
	contador += peso;
}
if (contador>0){
	console.log("A média ponderada é: " + soma/contador);
}
else{
	console.log("Nenhum valor foi adicionado!");
}
// */
// Exercicio 15

// Exercicio 16
/*
let numero = 100;
// let condicaoQueNaoPara = true;
let contador = 0;
let contador2;
while (contador < 50) {
	let raiz = parseInt(numero ** 0.5);
	// console.log(raiz);
	contador2 = 0;
	while (raiz > 0) {
		if (numero % raiz == 0){
			contador2++;
			break;
		}
		raiz--;
	}
	if(contador2 == 1 && raiz == 1){
		console.log(numero);
		contador++;
	}
	numero++;
}
// */
// Exercicio 16