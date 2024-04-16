const prompt = require('prompt-sync')();

let texto = "abacate";
let numero;
do {
	do {
		texto = prompt("Informe um número inteiro válido! ");
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



