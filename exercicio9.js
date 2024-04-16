const prompt = require('prompt-sync')();

let texto = "abacate";

// Conferindo se é de fato um número inteiro
do {
	console.log("Informe um número inteiro válido para o código:\n1- Sul\n2- Norte\n3- Leste\n4- Oeste\n5 ou 6- Nordeste\n7,8 ou 9- Sudeste\n10 até 20- Centro-Oeste\n25 até 50- Nordeste\nFora do intervalo serão considerados produtos importados;\n");
	texto = prompt();
} while (!/^\d+$/.test(texto));
let codigo = parseInt(texto);
let regiao = "Produto importado";

// Verificando as condições
switch (codigo) {
	case 1: {
		regiao = "Sul";
		break;
	}

		case 2 :{
			regiao = "Norte";
			break;
		}

		case 3 :{
			regiao = "Leste";
			break;
		}

		case 4 :{
			regiao = "Oeste";
			break;
		}

		case 7: case 8: case 9 :{
			regiao = "Sudeste";
			break;
		}
	default:
		if ((codigo >= 5 && codigo <= 6) || (codigo >=25 && codigo <= 50)){
			regiao = "Nordeste"
		}
		else if ((codigo >=10 && codigo <= 20)){
			regiao = "Centro-Oeste"
		}
		break;
}

// Fazendo os tratamentos para impressão

if (regiao == "Produto importado"){
	console.log("O produto é importado!")
}
else {
	console.log(`A região do produto é ${regiao}`);
}




