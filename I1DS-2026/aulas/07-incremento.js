// O peradores de incremento e decremento | pré e pós incremento
// Incremento -> somar algo de uma variavel
// //decremento -> subtrair algo de alguma variavel

let Idade = 16;
console.log(Idade);
Idade = Idade + 1;
//idade = idade+1 Somei 1 na idade
Idade++;
console.log(Idade);
Idade++;
console.log(Idade);
console.log("----------------------------------");

//idade = idade - 1 subtrai 1 na idade

console.log(Idade);
Idade--;
console.log(Idade);
Idade--;
console.log("----------------------------------");
let novaIdade = Idade + 1; // O Idade++ some na mesma variavel
console.log("Idade:", Idade, "| Nova Idade", novaIdade);

novaIdade = ++Idade; //Soma a 
console.log("Idade", Idade, "| Nova Idade:", novaIdade);
