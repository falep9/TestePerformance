# E-commerce Mobile

App mobile de e-commerce simples com testes de desempenho na API.

**Entrega:** 27/10

## Pastas

- `app/`: app React Native (Expo) com as 3 telas (Pode criar outra pasta se achar necessario)
- `api/`: API Express com dados fixos. 
- `tests/`: testes de integração (Jest) e de desempenho (carga, performance e estresse)
- `docs/`: requisitos, análise dos resultados e slides

## Divisão de tarefas

### Felipe (API)
- Criar a API (`/login`, `/produtos`, `/carrinho`, `/compra`)
- Escrever de 4 a 5 testes de integração com Jest
- Montar e rodar os testes de carga, performance e estresse
- Registrar os resultados em tabela

### Daniel (App)
- Criar as telas: Login, Catálogo e Carrinho/Compra
- Começar com dados fixos dentro do app
- Conectar o app à API quando ela estiver pronta

### Finalizando
- Fechar o contrato da API (rotas e formato do JSON)
- Analisar os resultados
- Fazer os slides

## Fluxo de trabalho
- Uma branch por pessoa (`feat/api` e `feat/app`)
- Merge na `main` por pull request
