function somar () {
	
	var n1 = document.getElementById ("primeiroNumero").value;
	var n2 = document.getElementById("segundoNumero").value;
	//n1 = parseInt(n1);
	//n2 = parseInt(n2);
	var vet = [];
	
	if (n1 <= 0 || n2 <= 0)	{
		
		alert('Digite números maiores que 0!');
		
	}	else {
			function getBaseLog(n1, n2) {
				return Math.log(n1) / Math.log(n2);
			}
			document.getElementById("soma").innerHTML = getBaseLog(n1, n2);
		}

		
}