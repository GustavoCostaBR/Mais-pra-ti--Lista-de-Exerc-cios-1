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



