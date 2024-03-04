
function sum(x,y){
    x=parseInt($("#firstNumber").val());
    y=parseInt($("#secondNumber").val());
    z = x+y;
    printValue("result",z);
}

function dif(x,y){
    x=parseInt($("#firstNumber").val());
    y=parseInt($("#secondNumber").val());
    z = x-y;
    printValue("result",z);
}

function div(x,y){
    x=parseInt($("#firstNumber").val());
    y=parseInt($("#secondNumber").val());
    z = x/y;
    printValue("result",z);
}

function mul(x,y){
    x=parseInt($("#firstNumber").val());
    y=parseInt($("#secondNumber").val());
    z = x*y;
    printValue("result",z);
}





function printValue(divId, value) {
	$("#"+divId).html(value);	
}

	$("#sum").on('click ', sum);
    $("#dif").on('click ', dif);
    $("#mul").on('click ', mul);
    $("#div").on('click ', div);
