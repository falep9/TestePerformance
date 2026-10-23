# API DE E-COMMERCE

### Para iniciar: na pasta api, execute `npm install` e depois `npm start.`
---
# ROTAS
- POST /login - envia email e senha e retorna um token
- GET /produtos - sem corpo; retorna a lista de produtos
- POST /carrinho - envia produtoId e quantidade; retorna itens e total
- DELETE /carrinho/:produtoId - sem corpo; retorna itens e total
- POST /compra - sem corpo; retorna mensagem e total
---
# DADOS
- Usuário: aluno@teste.com / 123456.
- Produtos: camiseta (ID 1), calça jeans (ID 2) e tênis casual (ID 3).
---
# Arquivos
- server.js inicia o servidor; rotas.js define os endpoints; dados.js guarda os dados em memória.
