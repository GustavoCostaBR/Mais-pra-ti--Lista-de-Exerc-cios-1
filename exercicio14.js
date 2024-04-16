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


