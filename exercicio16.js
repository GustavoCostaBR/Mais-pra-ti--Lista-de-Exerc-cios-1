let numero = 100;
// let condicaoQueNaoPara = true;
let contador = 0;
let contador2;
while (contador < 50) {
	let raiz = parseInt(numero ** 0.5);
	// console.log(raiz);
	contador2 = 0;
	while (raiz > 0) {
		if (numero % raiz == 0){
			contador2++;
			break;
		}
		raiz--;
	}
	if(contador2 == 1 && raiz == 1){
		console.log(numero);
		contador++;
	}
	numero++;
}
