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

