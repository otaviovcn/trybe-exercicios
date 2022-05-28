// function teste () {
//     console.log('Clicou');
// }

let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');

car1.style.marginLeft = 0;
car2.style.marginLeft = 0;

window.onload = function(){


function principal () {
  let botao = document.querySelector('#start-race-btn');
  // console.log(botao);

  botao.addEventListener('click', function () {
    car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px';
    car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px';

    if (parseInt(car1.style.marginLeft) > window.innerWidth){
      alert('Carro 1 ganhou');
    }

    else if (parseInt(car2.style.marginLeft) > window.innerWidth){
      alert('Carro 2 ganhou');
    }  
  })
}
  //function () {

  //   car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px';
  //   car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px';

  //   if (parseInt(car1.style.marginLeft) > window.innerWidth){
  //     alert('Carro 1 ganhou');
  //   }

  //   else if (parseInt(car2.style.marginLeft) > window.innerWidth){
  //     alert('Carro 2 ganhou');
  //   }    

  // });
}