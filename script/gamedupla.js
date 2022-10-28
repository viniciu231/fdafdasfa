var ordem = 0;
var vez = 0;
const cruz = `<span class="span1"></span><span class="span2"></span>`;
const circulo = `<span class="span3"></span>`;

var primeiro = document.querySelector(".primeiro");
var segundo = document.querySelector(".segundo");
var terceiro = document.querySelector(".terceiro ");
var quarto = document.querySelector(".quarto");
var quinto = document.querySelector(".quinto");
var sexto = document.querySelector(".sexto");
var setimo = document.querySelector(".setimo");
var oitavo = document.querySelector(".oitavo");
var nono = document.querySelector(".nono");

var arrayX = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var arrayO = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function prim() {
  if (primeiro.id == 0 && vez == 0) {
    vez = 1;
    primeiro.id = 1;
    primeiro.innerHTML = cruz;
    arrayX.splice(0, 1, "X");
  } else if (primeiro.id == 0 && vez == 1) {
    vez = 0;
    primeiro.id = 1;
    primeiro.innerHTML = circulo;
    arrayO.splice(0, 1, "O");
  }
  verificar();
}
function segu() {
  if (segundo.id == 0 && vez == 0) {
    vez = 1;
    segundo.id = 1;
    segundo.innerHTML = cruz;
    arrayX.splice(1, 1, "X");
  } else if (segundo.id == 0 && vez == 1) {
    vez = 0;
    segundo.id = 1;
    segundo.innerHTML = circulo;
    arrayO.splice(1, 1, "O");
  }
  verificar();
}
function terc() {
  if (terceiro.id == 0 && vez == 0) {
    vez = 1;
    terceiro.id = 1;
    terceiro.innerHTML = cruz;
    arrayX.splice(2, 1, "X");
  } else if (terceiro.id == 0 && vez == 1) {
    vez = 0;
    terceiro.id = 1;
    terceiro.innerHTML = circulo;
    arrayO.splice(2, 1, "O");
  }
  verificar();
}
function quar() {
  if (quarto.id == 0 && vez == 0) {
    vez = 1;
    quarto.id = 1;
    quarto.innerHTML = cruz;
    arrayX.splice(3, 1, "X");
  } else if (quarto.id == 0 && vez == 1) {
    vez = 0;
    quarto.id = 1;
    quarto.innerHTML = circulo;
    arrayO.splice(3, 1, "O");
  }
  verificar();
}
function quin() {
  if (quinto.id == 0 && vez == 0) {
    vez = 1;
    quinto.id = 1;
    quinto.innerHTML = cruz;
    arrayX.splice(4, 1, "X");
  } else if (quinto.id == 0 && vez == 1) {
    vez = 0;
    quinto.id = 1;
    quinto.innerHTML = circulo;
    arrayO.splice(4, 1, "O");
  }
  verificar();
}
function sext() {
  if (sexto.id == 0 && vez == 0) {
    vez = 1;
    sexto.id = 1;
    sexto.innerHTML = cruz;
    arrayX.splice(5, 1, "X");
  } else if (sexto.id == 0 && vez == 1) {
    vez = 0;
    sexto.id = 1;
    sexto.innerHTML = circulo;
    arrayO.splice(5, 1, "O");
  }
  verificar();
}
function seti() {
  if (setimo.id == 0 && vez == 0) {
    vez = 1;
    setimo.id = 1;
    setimo.innerHTML = cruz;
    arrayX.splice(6, 1, "X");
  } else if (setimo.id == 0 && vez == 1) {
    vez = 0;
    setimo.id = 1;
    setimo.innerHTML = circulo;
    arrayO.splice(6, 1, "O");
  }
  verificar();
}
function oita() {
  if (oitavo.id == 0 && vez == 0) {
    vez = 1;
    oitavo.id = 1;
    oitavo.innerHTML = cruz;
    arrayX.splice(7, 1, "X");
  } else if (oitavo.id == 0 && vez == 1) {
    vez = 0;
    oitavo.id = 1;
    oitavo.innerHTML = circulo;
    arrayO.splice(7, 1, "O");
  }
  verificar();
}
function nona() {
  if (nono.id == 0 && vez == 0) {
    vez = 1;
    nono.id = 1;
    nono.innerHTML = cruz;
    arrayX.splice(8, 1, "X");
  } else if (nono.id == 0 && vez == 1) {
    vez = 0;
    nono.id = 1;
    nono.innerHTML = circulo;
    arrayO.splice(8, 1, "O");
  }
  verificar();
}
