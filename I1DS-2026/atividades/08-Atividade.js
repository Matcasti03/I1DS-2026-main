/*****************************************************
Lista de Exercícios
*****************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript
que imprima os elementos da sua diagonal principal.
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
********************************************************
Dada a matriz abaixo, faça um programa em JavaScript
que multiplique seus elementos por um valor x e imprima
a matriz antes e após a multiplicação.
| 8 1 3 |
| 2 9 1 |
| 4 6 2 |
*/
let matriz1 = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4]
];

console.log("Matriz:");
console.table(matriz1);

console.log("Diagonal principal:");
for (let diagonal = 0; diagonal < matriz1.length; diagonal++) {
  console.log(matriz1[diagonal][diagonal]);
}
console.log("-------------------------------------------")

let matriz2 = [
  [8, 1, 3],
  [2, 9, 1],
  [4, 6, 2]
];

let x = 2; 

console.log("Matriz original:");
console.table(matriz2);


for (let linha = 0; linha < matriz2.length; linha++) {
  for (let coluna = 0; coluna < matriz2[i].length; coluna++) {
    matriz2[i][j] *= x;
  }
}

console.log("Matriz depois", x, ":");
console.table(matriz2);