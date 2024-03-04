document.getElementById("n").addEventListener('input',inputSum );

 function inputSum(){
	var inputNumber = parseInt(document.getElementById("n").value );
	sum( inputNumber );
}

 function sum(n){
	if (typeof n === 'number') {
		var sum = 0;
		for(var i=1;i<=n;i++){
			sum+=i;
		}
		return sum;	
	  } else if (typeof n === 'string' || typeof n === 'boolean') {
		return "not a number";
	  }
	if (typeof n === 'undefined') return "n is undefined ";
	
	
 }
 