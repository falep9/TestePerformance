const express = require('express');
const { listaProdutos, usuarioTeste, tokenFixo, carrinho } = require('./dados');

const rotas = express.Router();

// soma os preços dos produtos de acordo com as quantidades
function calcularTotal(itens) {
  return itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
}


// LOGIN 
rotas.post('/login', (requisicao, resposta) => {
  const { email, senha } = requisicao.body || {};

  // verifica os campos antes de comparar com o usuário fixo.
  if (!email || !senha) {
    return resposta.status(400).json({ erro: 'informe email e senha' });
  }

  if (email !== usuarioTeste.email || senha !== usuarioTeste.senha) {
    return resposta.status(401).json({ erro: 'credenciais inválidas' });
  }
  return resposta.status(200).json({ token: tokenFixo });
});

rotas.get('/produtos', (requisicao, resposta) => {
  return resposta.json(listaProdutos);
});



// CARRINHO
rotas.post('/carrinho', (requisicao, resposta) => {
  const { produtoId, quantidade } = requisicao.body || {};

  if (!produtoId || !quantidade || !Number.isInteger(quantidade) || quantidade < 1) {
    return resposta.status(400).json({ erro: 'informe produtoId e uma quantidade valida' });
  }

  // reaproveita o item existente para não duplicar o mesmo produto
  const itemCarrinho = carrinho.find((item) => item.produtoId === produto.id);
  if (!itemCarrinho) {
    carrinho.push({
      produtoId: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      quantidade
    });
  } else {
    itemCarrinho.quantidade += quantidade;
  }

  return resposta.json({ itens: carrinho, total: calcularTotal(carrinho) });
});


// remove um item do carrinho pelo id do produto
rotas.delete('/carrinho/:produtoId', (requisicao, resposta) => {
  const produtoId = Number(requisicao.params.produtoId);
  const indice = carrinho.findIndex((item) => item.produtoId === produtoId);

  if (indice !== -1) {
    carrinho.splice(indice, 1);
  }

  return resposta.json({ itens: carrinho, total: calcularTotal(carrinho) });
});


// finaliza a compra, esvazia o carrinho e volta para o total da compra
rotas.post('/compra', (requisicao, resposta) => {
  if (carrinho.length === 0) {
    return resposta.status(400).json({ erro: 'O carrinho está vazio' });
  }

  const total = calcularTotal(carrinho);
  carrinho.length = 0;

  return resposta.status(200).json({ mensagem: 'compra concluída', total });
});

module.exports = rotas;
