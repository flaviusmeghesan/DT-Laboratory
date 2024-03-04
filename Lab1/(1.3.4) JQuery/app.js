var counter = 0;


document.getElementById("count").addEventListener('input', printValue);
function printValue(divId, value) {
	$("#"+divId).html(value);	
}
printValue("count",0);
	$("#inc").on('click ', increment);
	$("#dec").on('click ', decrement);

function increment (){
	if(counter < 10){
	counter++;
	printValue("count",counter);
	}
}

function decrement (){	
	if(counter > 0){
	counter--;
	printValue("count",counter);
	}
}

