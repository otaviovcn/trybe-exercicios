// 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas. 

// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

const testingScope = (escopo) => {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';

    if (escopo === true) {
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        elseScope = `${elseScope} Não devo ser utilizada fora meu escopo (else)`;
        console.log(elseScope);
    }
};
testingScope(true);

// 🚀 Crie uma função que retorne um array em ordem crescente. 

const phrase = () => {
    const oddsAndEvens = [13, 3, 4, 10, 7, 2];
    const orderList = oddsAndEvens.sort(function (a, b) {
        return a - b;
    });
    const result = `Os números ${orderList} se encontram ordenados de forma crescente!`
    console.log(result);
}
phrase();

// Crie uma função que receba um número e retorne seu fatorial. 

function fatorial(number) {
    const list = [];
    let result = 0;

    if (number % 1 === 0) {
        if (number >= 3) {
            for (let index = 0; index < number; index += 1) {
                let num = number - index;
                list.push(num);
            }
            result = list[0] * list[1];
            for (let index2 = 2; index2 < number; index2 += 1) {
                result = result * list[index2];
            }
        } else if (number === 2) {
            result = 2;
        } else if (number === 1 || number === 0) {
            result = 1;
        } else {
            result = 'Infelizmente, números negativos não são aceitos :(';
        }
    } else if (typeof number !== 'number') {
        result = 'Este não é um número válido :(';
    } else {
        result = 'Este número não é inteiro :(';
    }
    console.log(result);
}
fatorial(8);

// 🚀 Crie uma página com um contador de cliques 

const clickCount = () => {
    const buttonMais = document.getElementById('buttonMais');
    const buttonMenos = document.getElementById('buttonMenos');
    const counter = document.querySelector('#counter');
    let valor = 0;

    buttonMais.addEventListener('click', () => {
        valor = parseInt(counter.innerText);
        counter.innerText = `${valor + 1}`;
    });

    buttonMenos.addEventListener('click', () => {
        valor = parseInt(counter.innerText);
        counter.innerText = `${valor - 1}`;
    });
}
clickCount();

const changeX = (nome) => {
    const frase = 'Tryber x aqui!';
    const newFrase = frase.replace('x', `${nome}`);
    //    console.log(newFrase);

    const changeY = () => {
        const skills = [`${newFrase}
       Minhas três principais habilidades são:
       JavaScript 
       HTML 
       CSS `]
        console.log(skills);
    }
    changeY();
}

changeX('Otávio');
