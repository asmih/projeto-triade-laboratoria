function bemVindo() {
    alert("Olá, " + document.getElementById("name").value);
}
document.getElementById("name").onkeypress = function(e) {
    if (e.keyCode == 13) {
        bemVindo();
        e.preventDefault();
    }
}
document.getElementById("send").onclick = function(e) {
    bemVindo();
    e.preventDefault();
}
