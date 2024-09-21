function add(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    var sum = num1 + num2;
    document.getElementById("result").innerHTML = sum;
}

function sub(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    var sub = num1 - num2;
    document.getElementById("result").innerHTML = sub;
}

function mult(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    var mult = num1 * num2;
    document.getElementById("result").innerHTML = mult;
}

function divide(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    var divide = num1 / num2;
    document.getElementById("result").innerHTML = divide;
}