function change() {
    var x = document.getElementById("button");
    x.innerText = "Changed";
}

function printName() {
    var name = document.getElementById("name").value;
    alert("Hello, " + name);
}

function calculate() {
    var numone = document.getElementById("num1").value;
    var numtwo = document.getElementById("num2").value;
    var znamenko = document.getElementById("znamenko").value;
    if (znamenko == "+") {
        var result = parseInt(numone) + parseInt(numtwo);
        
    }
    else if (znamenko == "-") {
        var result = parseInt(numone) - parseInt(numtwo);
        
    }
    else if (znamenko == "*") {
        var result = parseInt(numone) * parseInt(numtwo);
        
    }
    else if (znamenko == "/") {
        var result = parseInt(numone) / parseInt(numtwo);
        
    }
    else {
        var result = "Error";
    }
    alert(result);
}
