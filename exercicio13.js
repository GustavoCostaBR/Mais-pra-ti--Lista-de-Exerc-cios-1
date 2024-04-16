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

