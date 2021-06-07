// código de validação do usuario

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

function validaFormulario () {
      if (document.getElementById("user-name").value != "" && document.getElementById("user-email","tel").value != ""){

      alert("Parabéns! Agora você receberá novidades no seu e-mail.");
}
      else {
      alert("Por favor preencha os campos Nome, E-mail e Telefone");
}
}
