// const animal = document.getElementById('animals');

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// const lotteryNumbers = (param1, param2) => param1 === param2; 

// console.log(lotteryNumbers('a', 'a') ? 'Parabéns você ganhou' : 'Tente novamente');

// const validation = (myNumber, funcao) => {
//   const randomNumber = Math.floor((Math.random() * 5) + 1);

// console.log(randomNumber);

// return funcao(myNumber, randomNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
// return 'água é bom';
// };

// console.log(validation(3, lotteryNumbers));


// const comparation = numero === randomNumber;
// return (comparation ? 'Parabéns você ganhou' : 'Tente novamente');


// let obj = {};
// function verificarObjetoVazio(obj) {
//   return JSON.stringify() === "{}";
// }
// console.log(verificarObjetoVazio(obj));

const arr = [1, 2, 3];
// arr.length = 0;
const teste = arr.find((number) => number === 4);
console.log(teste);
