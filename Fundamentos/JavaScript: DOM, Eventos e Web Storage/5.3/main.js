const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;*
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.*
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?*
// Por conta da propriedade 'transform' do CSS que translada a posição do elemento nos seus eixos.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

// var escolha2 = li2.addEventListener('click', adicionaClasse2);

if ((li2.addEventListener('click', adicionaClasse2)) === true){
    li1.classList.remove('tech');
    // li3.classList.remove('tech');
}

var li1 = document.querySelector('#first-li');
li1.classList.remove('tech');

var li2 = document.querySelector('#second-li');

var li3 = document.querySelector('#third-li');

li2.addEventListener('click', adicionaClasse2);

li3.addEventListener('click', adicionaClasse3);

function adicionaClasse2 () {
    li2.className = 'tech'
}

function adicionaClasse3 () {
    li3.className = 'tech'
}

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.