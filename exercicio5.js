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



