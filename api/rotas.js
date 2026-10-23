const express = require('express');
const { listaProdutos, usuarioTeste, tokenFixo, carrinho } = require('./dados');

const rotas = express.Router();

function calcularTotal(itens) {
  return itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
}

rotas.post('/login', (requisicao, resposta) => {
  const { email, senha } = requisicao.body || {};

  if (!email || !senha) {
    return resposta.status(400).json({ erro: 'Dados inválidos' });
  }

  if (email !== usuarioTeste.email || senha !== usuarioTeste.senha) {
    return resposta.status(401).json({ erro: 'Email e senha invalidos!' });
  }

  resposta.json({ token: tokenFixo });
});

rotas.get('/produtos', (requisicao, resposta) => {
  resposta.json(listaProdutos);
});

rotas.post('/carrinho', (requisicao, resposta) => {
  const { produtoId, quantidade } = requisicao.body || {};

  if (!produtoId || !Number.isInteger(quantidade) || quantidade < 1) {
    return resposta.status(400).json({ erro: 'Dados inválidos' });
  }

  const produto = listaProdutos.find((item) => item.id === Number(produtoId));
  if (!produto) {
    return resposta.status(404).json({ erro: 'Produto não encontrado' });
  }

  const itemCarrinho = carrinho.find((item) => item.produtoId === produto.id);
  if (itemCarrinho) {
    itemCarrinho.quantidade += quantidade;
  } else {
    carrinho.push({
      produtoId: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      quantidade
    });
  }

  resposta.json({ itens: carrinho, total: calcularTotal(carrinho) });
});

rotas.delete('/carrinho/:produtoId', (requisicao, resposta) => {
  const produtoId = Number(requisicao.params.produtoId);
  const indice = carrinho.findIndex((item) => item.produtoId === produtoId);

  if (indice !== -1) {
    carrinho.splice(indice, 1);
  }

  resposta.json({ itens: carrinho, total: calcularTotal(carrinho) });
});

rotas.post('/compra', (requisicao, resposta) => {
  if (carrinho.length === 0) {
    return resposta.status(400).json({ erro: 'Carrinho vazio' });
  }

  const total = calcularTotal(carrinho);
  carrinho.length = 0;

  resposta.json({ mensagem: 'Compra concluída', total });
});

module.exports = rotas;
