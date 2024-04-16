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


