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




