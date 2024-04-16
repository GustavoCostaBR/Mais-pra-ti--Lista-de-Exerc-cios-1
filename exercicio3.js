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

