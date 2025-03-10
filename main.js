function add() {
    let firstname = parseFloat(document.getElementById("num1").value);
    let secondname = parseFloat(document.getElementById("num2").value);
    let result = firstname + secondname;
    document.getElementById("result").innerHTML = result;
}
function subtract() {
    let firstname = parseFloat(document.getElementById("num1").value);
    let secondname = parseFloat(document.getElementById("num2").value);
    let result = firstname - secondname;
    document.getElementById("result").innerHTML = result;
}
function mutiply() {
    let firstname = parseFloat(document.getElementById("num1").value);
    let secondname = parseFloat(document.getElementById("num2").value);
    let result = firstname * secondname;
    document.getElementById("result").innerHTML = result;
}
function Divided() {
    let firstname = parseFloat(document.getElementById("num1").value);
    let secondname = parseFloat(document.getElementById("num2").value);
    let result = firstname / secondname;
    document.getElementById("result").innerHTML = result;
}
function squareRoot() {
    let firstname = parseFloat(document.getElementById("num1").value);
    let result = Math.sqrt(firstname);
    document.getElementById("result").innerHTML = result;
}
function power(){
let firstname = parseFloat(document.getElementById("num1").value);
let secondname = parseFloat(document.getElementById("num2").value);
let result = Math.pow(firstname , secondname)
document.getElementById("result").innerHTML = result;
}
