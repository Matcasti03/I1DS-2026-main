let contador = document.getElementById("contador");

const adicionar = () =>{
    // ARMAZENA O VALOR ATUAL
    let valorAtual = contador.innerHTML;
    //AUMENTA O VALOR ATUAL EM +1
   valorAtual++;
   //ATUALIZA O VALOR DO CONTADOR
   contador.innerHTML = valorAtual;
} 
const diminuir = () =>{

    let valorAtual = contador.innerHTML;
    valorAtual--;
    contador.innerHTML = valorAtual;
}
const zerar = () =>{
    contador.innerHTML = 0;

}   


/* EXERCICIO 03 */
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let resultado = document.getElementById("resultado");

const somar = () => {
  let valor = parseFloat(num1.value) + parseFloat(num2.value);
  resultado.innerText = valor;
};

const subtrair = () => {
  let valor = parseFloat(num1.value) - parseFloat(num2.value);
  resultado.innerText = valor;
};

const multiplicar = () => {
  let valor = parseFloat(num1.value) * parseFloat(num2.value);
  resultado.innerText = valor;
};

const dividir = () => {
  let valor = parseFloat(num1.value) / parseFloat(num2.value);
  resultado.innerText = valor;
};
