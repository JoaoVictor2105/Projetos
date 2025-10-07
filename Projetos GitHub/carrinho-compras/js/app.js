let totalGeral
limpar()

function adicionar() {
  // recuperar valores; nome, produto, quantidade e valor
  let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;

// calcular o subtotal
let subtotal = quantidade * valorUnitario;
// adcionar produto no carrinho
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;

  // atualizar o valor total
 totalGeral = totalGeral + subtotal;
 let campoTotal = document.getElementById('valor-total');
 campoTotal.textContent = ` R$ ${totalGeral}`
 document.getElementById('quantidade').value = '';
}

function limpar() {
totalGeral = 0;
  let carrinhoTotal = document.getElementById('lista-produtos').innerHTML = '';
  let valorTotal = document.getElementById('valor-total').textContent = 'R$ 0';
}