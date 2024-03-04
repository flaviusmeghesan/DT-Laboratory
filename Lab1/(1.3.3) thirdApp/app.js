var counter = 0;

 function printValue(divId, value){
 document.getElementById(divId).innerHTML = value;
 }
	printValue("counter", 0);

	document.getElementById("inc").addEventListener("click",increment);
	document.getElementById("dec").addEventListener("click",decrement);
	document.getElementById("res").addEventListener("click",reset);
	
function increment(){
	counter++;
	printValue("counter", counter);
}
function reset(){
	counter = 0;
	printValue("counter",counter);
}
function decrement(){
	counter--;
	printValue("counter", counter);
}