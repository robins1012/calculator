function display(ch) {
    let res = document.getElementById("display");
    res.value += ch;
}
function clearScreen() {
    document.getElementById("display").value = "";
}
function del() {
    let x = document.getElementById("display").value;
    //x = x.slice(0, -1);
    x = x.substring(0, x.length - 1)
    document.getElementById('display').value = x
}
function result() {
    let x = document.getElementById("display").value;
    let y = eval(x);
    //console.log(typeof (x + "" + y))
    document.getElementById("display").value = y;
}