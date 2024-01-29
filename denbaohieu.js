var maudo = document.getElementById("dendo");
var mauvang = document.getElementById("denvang");
var mauxanh = document.getElementById("denxanh");

function getRed() {
    clearLights();
    maudo.style.backgroundColor = "red"; 
}
function getGreen() {
    clearLights();
    mauxanh.style.backgroundColor = "green"; 
}
function getYellow() {
    clearLights();
    mauvang.style.backgroundColor = "yellow";
}
function clearLights() {
    document.getElementById('dendo').style.backgroundColor = "#fff"; 
    document.getElementById('denvang').style.backgroundColor = "#fff"; 
    document.getElementById('denxanh').style.backgroundColor = "#fff"; 
}
