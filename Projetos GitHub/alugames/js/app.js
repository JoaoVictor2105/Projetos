function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

if (imagem.classList.contains('dashboard__item__img--rented')) {
     imagem.classList.remove('dashboard__item__img--rented');
     botao.innerHTML = 'Alugar';
     botao.classList.remove('dashboard__item__button--return');
     let devolver = prompt("Para devolver, digite: 'DEVOLVER'");
     
     if(devolver === 'DEVOLVER') {
      alert('Devolução realizada.');
     } else {
         imagem.classList.add('dashboard__item__img--rented');
         botao.innerHTML = 'Devolver';
         botao.classList.add('dashboard__item__button--return');
         alert('Devolução não realizada.');     
     }
     
} else {
     imagem.classList.add('dashboard__item__img--rented');
     botao.innerHTML = 'Devolver'
     botao.classList.add('dashboard__item__button--return');
}}