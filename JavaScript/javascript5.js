let nomeCompleto = window.sessionStorage.getItem("nomeCompleto");
let assentoFinal = window.sessionStorage.getItem("assentoFinal");
let contatoEmer = window.sessionStorage.getItem("contatoEmer");
let localizador = window.sessionStorage.getItem("localizador");

//console.log(nomeCompleto, assentoFinal, contatoEmer, localizador);

document.getElementById("instrucao").innerText =
  nomeCompleto + ", uma boa viagem!";
document.getElementById("poltrona").innerText = assentoFinal;
document.getElementById("instrucao1").innerText =
  "Caso dê algo errado na sua viagem, fique tranquilo! Avisaremos o(a) " +
  contatoEmer +
  "!";
document.getElementById("instrucao2").innerText = "Localizador " + localizador;

setTimeout(function(){
  window.location = "./Página 1.html";
}, 10 * 1000);