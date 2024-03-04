var counter = 0;

 function printValue(divId, value){
 document.getElementById(divId).innerHTML = value;
 }
	printValue("counter", 0);

	// document.getElementById("inc").addEventListener("click",increment);
	// document.getElementById("dec").addEventListener("click",decrement);
	// document.getElementById("res").addEventListener("click",reset);
	
// function increment(){
// 	counter++;
// 	printValue("counter", counter);
// }
// function reset(){
// 	counter = 0;
// 	printValue("counter",counter);
// }
// function decrement(){
// 	counter--;
// 	printValue("counter", counter);
// }

function getFibonacci(n){
	if (n < 1 || n >10 ) return "not allowed";
	if(typeof n !== 'number') return "not allowed";
	
	var v = [];
	var a = [];

	a[0] = 0;
	a[1] = 1;
	a[2] = 1;

	for (i = 0; i <= 2;i++){
		v[i] = a[i];
	}

	for(i=3; i<=n;i++){
		a[i] = a[i-1]+a[i-2];
		v[i] = a[i];
	}

	console.log(v);
	printValue("counter",v	);
}