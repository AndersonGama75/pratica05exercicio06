function area () {

	var codigo = prompt('Informe o código:\nA - para retângulo;\nB - para triângulo;\nC - para círculo;\nD - para trapézio.');
	var codig1 = codigo.toLowerCase();
	
	if (codig1 == 'a' || codig1 == 'b' || codig1 == 'c' || codig1 == 'd'){
		switch (codig1) {
			case 'a':
				var retangBase = prompt('Informe a base do retângulo:');
				var retangAlt = prompt('Informe a altura do retângulo:');
				var retangArea = retangBase * retangAlt;
				alert('A área do retângulo é: ' + retangArea);
				break;
			case 'b':
				var triangBase = prompt('Informe a base do triângulo:');
				var triangAlt = prompt('Informe a altura do triângulo:');
				var triangArea = triangBase * triangAlt / 2;
				alert('A área do triângulo é: ' + triangArea);
				break;
			case 'c':
				var circRaio = prompt('Informe o raio do círculo:');
				var circArea = 3.14 * Math.pow(circRaio, 2);
				alert('A área do círculo é: ' + circArea);
				break;
			case 'd':
				var trapBaseMaior = prompt('Informe a base maior do trapézio:');
				trapBaseMaior = parseInt(trapBaseMaior);
				var trapBaseMenor = prompt('Informe a base menor do trapézio:');
				trapBaseMenor = parseInt(trapBaseMenor);
				var trapAlt = prompt('Informe a altura do trapézio:');
				var trapArea = (trapBaseMaior + trapBaseMenor) * trapAlt / 2;
				alert('A área do trapézio é: ' + trapArea);
				break;
			default:
				alert('teste');

		}
	}	else {
			alert('Código inválido!');
		}
	

}



/* function somar () {
	
	var n1 = document.getElementById ("primeiroNumero").value;
	var n2 = document.getElementById("segundoNumero").value;
	//n1 = parseInt(n1);
	//n2 = parseInt(n2);
	var vet = [];
	
	if (n1 % 2 != 0 || n1 <= 0 || n2 % 2 != 0 || n2 <= 0)	{
		
		alert('Digite valores pares maiores que 0');
		
	}

		function getBaseLog(n1, n2) {
			return Math.log(n1) / Math.log(n2);
		}
		document.getElementById("soma").innerHTML = getBaseLog(n1, n2);
} */