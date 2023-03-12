function somar(){
    var num1, num2, resp;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1)) num1 = 0;
    if (isNaN(num2)) num2 = 0;

    resp = num1 + num2;

    document.getElementById("resp").value = resp;
}

function subtrair(){
    var num1, num2, resp;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1)) num1 = 0;
    if (isNaN(num2)) num2 = 0;

    resp = num1 - num2;

    document.getElementById("resp").value = resp;
}

function dividir(){
    var num1, num2, resp;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1)) num1 = 0;
    if (isNaN(num2)) num2 = 0;

    resp = num1 / num2;

    if (!isFinite(resp)){
        resp = 0;
    }

    document.getElementById("resp").value = resp;
}

function multiplicar(){
    var num1, num2, resp;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1)) num1 = 0;
    if (isNaN(num2)) num2 = 0;

    resp = num1 * num2;

    document.getElementById("resp").value = resp;
}

function limpar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resp").value = "0";
}