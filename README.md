# Desafio 2 - Backend e frontend
Informações do desafio
Nesse desafio você trabalhará com backend e frontend juntos para consolidar os conhecimentos adquiridos nas aulas de Nest.js e React.js.


Para isso:

- Crie um docker-compose.yaml que levante uma aplicação Nest.js e React juntos

- A aplicação Nest.js precisa rodar na porta 3000

- Aplicação React.js precisa rodar na porta 3001.

- Ao acessar http://localhost:3001 a aplicação React precisa consumir e listar "rotas" do endpoint do Nest.js: http://localhost:3000/routes.

- O endpoint http://localhost:3000/routes precisa retornar 5 rotas com os seguintes dados: title - título da rota, startPosition - contém latitude e longitude, endPosition - contém latitude e longitude
