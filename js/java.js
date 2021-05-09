//CONVERSORES DE MASSA

function kl() {
    var pconv = document.getElementById("entradakl").value;
    var conv = pconv * 2.205;
    var span = document.getElementById("saidakl");

    span.innerText = conv;
}

function lk() {
    var pconv = document.getElementById("entradalk").value;
    var conv = pconv / 2.205;
    var span = document.getElementById("saidalk");

    span.innerText = conv;
}

function ko() {
    var pconv = document.getElementById("entradako").value;
    var conv = pconv * 35.274;
    var span = document.getElementById("saidako");

    span.innerText = conv;
}

function ok() {
    var pconv = document.getElementById("entradaok").value;
    var conv = pconv / 35.274;
    var span = document.getElementById("saidaok");

    span.innerText = conv;
}

//CONVERSORES DE VOLUME

function lg() {
    var pconv = document.getElementById("entradalg").value;
    var conv = pconv / 4.546;
    var span = document.getElementById("saidalg");

    span.innerText = conv;
}

function gl() {
    var pconv = document.getElementById("entradagl").value;
    var conv = pconv * 4.546;
    var span = document.getElementById("saidagl");

    span.innerText = conv;
}

function lo() {
    var pconv = document.getElementById("entradalo").value;
    var conv = pconv * 35.195;
    var span = document.getElementById("saidalo");

    span.innerText = conv;
}

function ol() {
    var pconv = document.getElementById("entradaol").value;
    var conv = pconv / 35.195;
    var span = document.getElementById("saidaol");

    span.innerText = conv;
}

//CONVERSORES DE COMPRIMENTO

function mp() {
    var pconv = document.getElementById("entradamp").value;
    var conv = pconv * 3.281;
    var span = document.getElementById("saidamp");

    span.innerText = conv;
}

function pm() {
    var pconv = document.getElementById("entradapm").value;
    var conv = pconv / 3.281;
    var span = document.getElementById("saidapm");

    span.innerText = conv;
}

function mj() {
    var pconv = document.getElementById("entradamj").value;
    var conv = pconv * 1.094;
    var span = document.getElementById("saidamj");

    span.innerText = conv;
}

function jm() {
    var pconv = document.getElementById("entradajm").value;
    var conv = pconv / 1.094;
    var span = document.getElementById("saidajm");

    span.innerText = conv;
}

//CONVERSORES DE TEMPERATURA

function fc() {
    var pconv = document.getElementById("entradafc").value;
    var conv = (pconv - 32) * 5 / 9;
    var span = document.getElementById("saidafc");

    span.innerText = conv;
}

function cf() {
    var pconv = document.getElementById("entradacf").value;
    var conv = (pconv * 9 / 5) + 32;
    var span = document.getElementById("saidacf");

    span.innerText = conv;
}

function kc() {
    var pconv = document.getElementById("entradakc").value;
    var conv = pconv - 273.15;
    var span = document.getElementById("saidakc");

    span.innerText = conv;
}

function ck() {
    var pconv = document.getElementById("entradack").value;
    var conv = parseFloat(pconv) + 273.15;
    var span = document.getElementById("saidack");

    span.innerText = conv;
}

//CONVERSORES DE VELOCIDADE

function sh() {
    var pconv = document.getElementById("entradash").value;
    var conv = pconv * 3.6;
    var span = document.getElementById("saidash");

    span.innerText = conv;
}

function hs() {
    var pconv = document.getElementById("entradahs").value;
    var conv = pconv / 3.6;
    var span = document.getElementById("saidahs");

    span.innerText = conv;
}

function nh() {
    var pconv = document.getElementById("entradanh").value;
    var conv = pconv * 1.852;
    var span = document.getElementById("saidanh");

    span.innerText = conv;
}

function hn() {
    var pconv = document.getElementById("entradahn").value;
    var conv = pconv / 1.852;
    var span = document.getElementById("saidahn");

    span.innerText = conv;
}

//CONVERSORES DE PRESSÃO

function pa() {
    var pconv = document.getElementById("entradapa").value;
    var conv = pconv * 14.696;
    var span = document.getElementById("saidapa");

    span.innerText = conv;
}

function ap() {
    var pconv = document.getElementById("entradaap").value;
    var conv = pconv / 14.696;
    var span = document.getElementById("saidaap");

    span.innerText = conv;
}

function ba() {
    var pconv = document.getElementById("entradaba").value;
    var conv = pconv / 1.013;
    var span = document.getElementById("saidaba");

    span.innerText = conv;
}

function ab() {
    var pconv = document.getElementById("entradaab").value;
    var conv = pconv * 1.013;
    var span = document.getElementById("saidaab");

    span.innerText = conv;
}