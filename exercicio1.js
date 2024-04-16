const prompt = require('prompt-sync')();

let texto = "abacate";

// Conferindo se é de fato um número inteiro
do {
	texto = prompt("Informe um número inteiro válido para a temperatura em Celsius!");
	// console.log(texto);
} while (!/^-?\d+$/.test(texto));
// } while (!/^\d+$/.test(texto));
// Fazendo os tratamentos e checagens necessários e retornando a resposta
let temperaturaCelsius = parseInt(texto);
if (temperaturaCelsius < -273){
	console.log("A temperatura não pode ser convertida, pois -273,15°C é igual ao zero absoluto, 0 Kelvin. Não existe temperatura mais baixa.");
} else{
	let temperaturaFahrenheit = temperaturaCelsius * (9/5) + 32;
	console.log(temperaturaFahrenheit + " °F");
}

