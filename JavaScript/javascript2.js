document.getElementById("continuar").addEventListener("click", function () {
  let localizador = document.getElementById("localizadorTexto").value;

  if (localizador.toString().length == 6) {
    if (
      localizador == "A75HB2" ||
      localizador == "B56T23" ||
      localizador == "2MJ03J" ||
      localizador == "3LQ7RZ" ||
      localizador == "BNS981" ||
      localizador == "MJ765S" ||
      localizador == "BN78JH" ||
      localizador == "EUAN82" ||
      localizador == "28SN96"
    ) {
      window.sessionStorage.setItem("localizador", localizador);
      window.location = "./Página 3.html";


    } else {
      document.getElementById("mensagem").value = "Localizador não encontrado.";
    }
  } else {
    document.getElementById("mensagem").value = "Localizador inválido.";
  }
});
