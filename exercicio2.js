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

