let assento;
let qtnAssentos = document.getElementsByClassName("assento");
let assentoFinal;
for (let i = 0; i < qtnAssentos.length; i++) {
  assento = qtnAssentos[i];
  assento.addEventListener("click", function (ev) {
    let desmarcar = document.getElementsByClassName("selecionada");

    if (desmarcar.length > 0) {
      desmarcar[0].className = "assento";
    }
    assentoFinal = ev.target.innerText;
    ev.target.className = "selecionada";
    //    console.log(ev.target.innerText);
  });
}
document.getElementById("continuar").addEventListener("click", function () {
  console.log(assentoFinal);
  if (assentoFinal == undefined) {
    document.getElementById("mensagem").value = "Selecione um assento.";
  } else {
    window.sessionStorage.setItem("assentoFinal", assentoFinal);
    window.location = "./Página 5.html";
  }
});
