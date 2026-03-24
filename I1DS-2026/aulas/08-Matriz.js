//Criando uma matriz
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
  [1, 3, 9],
];
console.table(matriz);

//Obtendo elemento com base e seus indices
console.log(matriz[0][1]);
console.log(matriz[2][0]);

//**********************************************************
//EXERCÍCIO
//**********************************************************
/*
1. Crie uma matriz 3x3
2. Imprima valores da diagonal principal
3. Altere os valores do item matriz [1][2] para 20 e matriz [2][0] para 30
*/

var matriz2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matriz2);
console.log(matriz2[0][0]);
console.log(matriz2[1][1]);
console.log(matriz2[2][2]);
console.log(matriz2[0][2]);
console.log(matriz2[1][1]);
console.log(matriz2[2][0]);

matriz2 [1][2] = 20;
matriz2 [2][0] = 30;
console.table(matriz2);