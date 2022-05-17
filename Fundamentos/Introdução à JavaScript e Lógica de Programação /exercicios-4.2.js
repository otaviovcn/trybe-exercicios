// // variáveis
// const myName = Otávio;
// const birthCity = Recife;
// const birthYear = 2000;
// console.log();

// // tipos primitivos

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//     firstName: 'Ana',
//     lastName: 'Santos',
// }
// const patientEmail = 'ana@email.com';

// console.log(typeof patientInfo);

// // Condições If e Else

// const nota = 80;

// if (nota > 80) {
//     console.log("Parabéns, você foi aprovada(o)!");// tipos primitivos

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//     firstName: 'Ana',
//     lastName: 'Santos',
// }
// const patientEmail = 'ana@email.com';

// console.log(typeof patientInfo);
// }

// else if (nota < 80 && nota > 60) {
//     console.log("Você está na nossa lista de espera");
// }

// else {
//     console.log("Você foi reprovada(o)");
// }

// -----------------------------------------------

// *** Exercícios 4.2 ***

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// // * imprimindo todos os valores nele contidos com a função console.log(); 

// console.log(numbers);

// -----------------------------------------------

// // * Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; 

// let resultado = 0
// for (let i = 0; i < numbers.length; i += 1) {
//     resultado = numbers[i] + resultado 
// }
// console.log(resultado);

// -----------------------------------------------

// // * Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; 

// let resultado = 0
// for (let i = 0; i < numbers.length; i += 1) {
//     resultado = numbers[i] + resultado 
// }
// console.log(resultado / numbers.length);

// -----------------------------------------------

// // *  Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; 

// let resultado = 0
// for (let i = 0; i < numbers.length; i += 1) {
//     resultado = numbers[i] + resultado
// }

// if (resultado > 20) {
//     console.log('valor maior que 20');
// }
// else {
//     console.log('valor menor ou igual a 20');
// }

// -----------------------------------------------

// // * Utilizando for, descubra qual o maior valor contido no array e imprima-o; 

// let maior = [0];
// for (let i = 0; i < numbers.length; i += 1) {
//     if (maior < numbers[i]) {
//         maior = numbers[i];
//     }
// }
// console.log(maior);

// -----------------------------------------------

// // *  Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; 

// let impares = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 != 0) {
//         impares = impares + 1;
//     }
// }
// if (impares > 0) {
//     console.log(impares);
// }
// else {
//     console.log('nenhum valor ímpar encontrado');
// }

// -----------------------------------------------

// // * Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let menor = numbers[0];
// for (let i = 0; i < numbers.length; i += 1) {
//     if (menor > numbers[i]) {
//         menor = numbers[i];
//     }
// }
// console.log(menor);

// -----------------------------------------------

// // * Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado; 

// let numeros = []
// let valor = 0

// for (let i = 0; i < 25; i += 1) {
//     valor = valor + 1;
//     numeros.push(valor);
// }
// console.log(numeros);
// *************

// let numeros = [];
// // let valor = 0;
// let valor = 0;

// valor = Math.floor(Math.random() * 25);

//  numeros.push(valor);

// for (let i = 0; i < 24; i += 1) {
//     numeros[i] = Math.floor(Math.random() * 25);
//     for (let index = 0; index < numeros.length; index += 1) {
//         if (numeros[i] != numeros[index]) {
//             valor = numeros[i];
        
//         }
//     }
//     numeros.push(valor);
    
// }
// console.log(numeros);


// for (let i = 0; i < 25; i += 1) {
//     numeros[i] = Math.floor(Math.random() * 25);
//     if (for (let index = 0; index < numeros.length; index += 0) {
//         if (numeros[i] != numeros[index] {
//             valor = numeros[i];
//         }
//     } )
//     numeros.push(valor);
// }
// console.log(numeros);
// ****************



// *****************
// for (let i = 0; i < 25; i += 1) {
//     numeros[i] = Math.floor(Math.random() * 25);       
//             valor = numeros[i];
//                 if ((numeros[i + 1] > numeros[i] && numeros[i + 1] != numeros[i]) && (numeros[i + 1] < numeros[i] && numeros[i + 1] != numeros[i]))
//     numeros.push(valor);
// }
// console.log(numeros);
// Math.floor()
// Math.random();

// -----------------------------------------------

// * Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. 

// let numeros = []
// let valor = 0

// for (let i = 0; i < 25; i += 1) {
//     valor = valor + 1;
//     numeros.push(valor/2);
// }
// console.log(numeros);

// -----------------------------------------------

// * Ordene o array numbers em ordem crescente e imprima seus valores; 

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers);

// -----------------------------------------------


// * Ordene o array numbers em ordem decrescente e imprima seus valores; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers);

// -----------------------------------------------

// * Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo: 


[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]














// let sena

// for (let i = 0; i < sena.length; i += 1) {
//     for (let index = 0; index < sena.length; index += 1) {
//         if (sena[i] != sena[index]) {
//             sena.push(sena[i])
//         }

//         else if (sena[i] === sena[index] && sena[i] === 60) {
//             sena.push(sena[1] - 1)

//         }
//     }
// }


// 1 4 4 _ _ _ 