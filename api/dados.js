const listaProdutos = [
  {
    id: 1,
    nome: 'Camiseta',
    preco: 67.69,
    imagem: 'https://placehold.co/300x300?text=Camiseta'
  },
  {
    id: 2,
    nome: 'Calça jeans',
    preco: 67.69,
    imagem: 'https://placehold.co/300x300?text=Calca'
  },
  {
    id: 3,
    nome: 'Tênis',
    preco: 67.69,
    imagem: 'https://placehold.co/300x300?text=Tenis'
  }
];

const usuarioTeste = {
  email: 'aluno@teste.com',
  senha: '123456'
};

const tokenFixo = 'token-simples-de-teste';
// Um único carrinho compartilhado
const carrinho = [];

module.exports = { listaProdutos, usuarioTeste, tokenFixo, carrinho };
