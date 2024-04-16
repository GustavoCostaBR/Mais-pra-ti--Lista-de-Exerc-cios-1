const prompt = require('prompt-sync')();

let texto = "abacate";

// Conferindo se é de fato um número inteiro
do {
	texto = prompt("Informe um número válido para a quantidade de maçãs: ");
} while (!/^\d+$/.test(texto));
let numeroMacas = parseInt(texto);

let valor;
const unitario1 = 0.3;
const unitario2 = 0.25;


if ((numeroMacas >= 12)){
	valor = unitario2 * numeroMacas;
}
else {
	valor =unitario1 * numeroMacas;
}
console.log(`O valor é R$ ${valor}`);



