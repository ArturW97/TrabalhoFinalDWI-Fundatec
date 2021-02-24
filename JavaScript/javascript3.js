document.getElementById("continuar").addEventListener("click", function () {
  //Coletar Dados

  let cpf = parseFloat(document.getElementById("cpf1").value);
  //  console.log(cpf);
  let nomeCompleto = document.getElementById("nomeCompleto1").value;
  // console.log(nomeCompleto);
  let dataNascimento = document.getElementById("dataNascimento1").value;
  // console.log(dataNascimento);
  let telefone = parseFloat(document.getElementById("telefone1").value);
  //  console.log(telefone);
  let generoA = document.getElementById("masculino").checked;
  let generoB = document.getElementById("feminino").checked;
  let generoC = document.getElementById("outro").checked;

  let genero;
  if (generoA == true) {
    genero = "Masculino";
  } else if (generoB == true) {
    genero = "Feminino";
  } else if (generoC == true) {
    genero = "Outro";
  }
  //  console.log(genero);

  let contatoEmer = document.getElementById("contatoEmer1").value;
  //    console.log(contatoEmer);

  let telefoneEmer = parseFloat(document.getElementById("telefoneEmer1").value);
  //   console.log(telefoneEmer);

  //Aplicar regras sobre os dados.

  document.getElementById("mensagem").value = " ";

  //cpf

  let cpfOK = false;

  if (cpf.toString().length != 11) {
    document.getElementById("mensagem").value = "Cpf Inválido.";
    //  console.log(cpf.toString().length);
    cpf1.style = "border-color:red";
    let cpfOK = false;
  } else {
    cpfOK = true;
    cpf1.style = "";
  }
  //nome

  let nomeCompletoOK = false;

  //   console.log(nomeCompleto.toString().length)

  if (nomeCompleto.length <= 10 || nomeCompleto.length >= 100) {
    document.getElementById("mensagem").value = "Nome Completo Inválido.";
    nomeCompleto1.style = "border-color:red";
    nomeCompletoOK = false;
    //        console.log(nomeCompletoOK);
  } else {
    nomeCompletoOK = true;
    nomeCompleto1.style = " ";
    //     console.log(nomeCompletoOK);
  }

  //Data de Nascimento

  let dataNascimentoOK = false;
  console.log(dataNascimento);
  if (dataNascimento == "") {
    document.getElementById("mensagem").value = "Data de Nascimento Inválida.";
    dataNascimentoOK = false;
    dataNascimento1.style = "border-color:red";
  } else {
    dataNascimentoOK = true;
    dataNascimento1.style = "";
  }
  //Telefone

  let telefoneOk = false;

  if (telefone.toString().length != 11) {
    document.getElementById("mensagem").value = "Telefone Inválido.";
    telefoneOk = false;
    telefone1.style = "border-color:red";
  } else {
    telefoneOk = true;
    telefone1.style = "";
  }

  //Sexo

  let sexoOk = false;
  let sexo;

  if (generoA == false && generoB == false && generoC == false) {
    document.getElementById("mensagem").value = "Sexo Inválido.";
    sexoOk = false;
  } else {
    if (generoA == true) {
      sexo = "Masculino";
    } else if (generoB == true) {
      sexo = "Feminino";
    } else if (generoC == true) {
      sexo = "Outro";
    }
    sexoOk = true;
  }

  //Contato de Emergência

  let contatoEmerOK = false;

  if (contatoEmer.length <= 10 || contatoEmer.length >= 100) {
    document.getElementById("mensagem").value =
      "Contato de Emergência Inválido.";
    contatoEmer1.style = "border-color:red";
    contatoEmerOK = false;
  } else {
    contatoEmerOK = true;
    contatoEmer1.style = " ";
  }

  //Telefone de Emergência

  let telefoneEmerOk = false;

  if (telefoneEmer.toString().length != 11) {
    document.getElementById("mensagem").value =
      "Telefone de Emergência Inválido.";
    telefoneEmerOk = false;
    telefoneEmer1.style = "border-color:red";
  } else {
    telefoneEmerOk = true;
    telefoneEmer1.style = "";
  }

  if (
    cpfOK == true &&
    nomeCompletoOK == true &&
    dataNascimentoOK == true &&
    telefoneOk == true &&
    sexoOk == true &&
    contatoEmerOK == true &&
    telefoneEmerOk == true
  ) {
    // window.sessionStorage.setItem("cpf", cpf);
    window.sessionStorage.setItem("nomeCompleto", nomeCompleto);
    //  window.sessionStorage.setItem("dataNascimento", dataNascimento);
    //  window.sessionStorage.setItem("telefone", telefone);
    // window.sessionStorage.setItem("sexo", sexo);
    window.sessionStorage.setItem("contatoEmer", contatoEmer);
    // window.sessionStorage.setItem("telefoneEmer", telefoneEmer);

    window.location = "./Página 4.html";
  }
});
