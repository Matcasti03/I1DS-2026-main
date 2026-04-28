const cadastrar = (event) => {

//Parar a propagaçao padrao do evento
    event.preventDefault();

    //capturar os valores dos campos dos elementos por id
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
}

//capturando o elemento da lista por id
let lista = document.getElementById("lista");

//criar  um novo elemento <li>nome - Email</li>
let novoitem = document.createElement("li");
novoitem.innerText = nome + " - " + email;

//adicionar o novo item a lista
lista.appendChild(novoitem);
//limpo os campos do formulario
document.getElementById("nome").value = "";
document.getElementById("email").value = "";