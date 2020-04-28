function calc() {
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let op = document.getElementById("operator").value;
    let calculate;

    if (op == "add") {
        calculate = a + b;
    } else if (op == "subtract") {
        calculate = a - b;
    } else if (op == "multiply") {
        calculate = a * b;
    } else if (op == "divide") {
        calculate = a / b;
    }

    document.getElementById("results").innerHTML = calculate;
}