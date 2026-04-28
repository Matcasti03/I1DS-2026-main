function cadastrar(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  let lista = document.getElementById("lista");

  // Criar <li>
  let novoItem = document.createElement("li");

  // Texto
  let texto = document.createElement("span");
  texto.innerText = nome + " - " + email;

  // BOTÃO EDITAR
  let btnEditar = document.createElement("button");
  btnEditar.innerText = "Editar";

  btnEditar.onclick = function () {
    let novoNome = prompt("Novo nome:", nome);
    let novoEmail = prompt("Novo email:", email);

    if (novoNome && novoEmail) {
      texto.innerText = novoNome + " - " + novoEmail;

      // Atualiza valores internos
      nome = novoNome;
      email = novoEmail;
    }
  };

  // BOTÃO EXCLUIR
  let btnExcluir = document.createElement("button");
  btnExcluir.innerText = "Excluir";

  btnExcluir.onclick = function () {
    lista.removeChild(novoItem);
  };

  // Adicionar tudo no <li>
  novoItem.appendChild(texto);
  novoItem.appendChild(btnEditar);
  novoItem.appendChild(btnExcluir);

  lista.appendChild(novoItem);

  // Limpar campos
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}