const express = require("express");
const app = express();

// Informo ao Express que todo corpo
// de requisição será estruturado em JSON
app.use(express.json());

app.get("/hello", function (req, res) {
    res.send("Hello World");
});

/*
Lista de Endpoints CRUD
Create, Read (Single & All), Update, Delete
Criar, Ler (Individual & Tudo), Atualizar, Remover

Associamos os endpoints aos verbos de HTTP
Quando seguimos as convenções, utilizandos os verbos corretos,
podemos dizer que a nossa aplicação segue os padrões REST
Quando uma aplicação segue os padrões REST, ela é chamada de RESTful
[POST] -> Create
[GET] -> Read
[PUT/PATCH] -> Update
[DELETE] -> Delete
*/

// Escolha um tema: Filmes, Séries, Jogos, etc

const lista = ["Senhor dos Anéis", "Harry Potter"];
//              0                   1

// [GET] - Read All
app.get("/filmes", (req, res) => {
    res.send(lista.filter(Boolean));
});

// [GET] - Read Single (ou Read by ID/Index)
app.get("/filmes/:id", (req, res) => {
    const id = req.params.id;

    const item = lista[id - 1];

    res.send(item);
});

// [POST] - Create
app.post("/filmes", (req, res) => {
    const item = req.body.nome;

    lista.push(item);

    res.send("Item criado com sucesso.");
});

// [PUT] - Update
app.put("/filmes/:id", (req, res) => {
    const id = req.params.id;

    const item = req.body.nome;

    lista[id - 1] = item;

    res.send("Item editado com sucesso.");
});

// [DELETE] - Delete
app.delete("/filmes/:id", (req, res) => {
    const id = req.params.id;

    delete lista[id - 1];

    res.send("Item removido com sucesso.");
});

app.listen(3000);

// Resumo dos endpoints:
// [POST] - /filmes -> Adicionar um elemento
// [GET] - /filmes/:id -> Ler um único elemento
// [GET] - /filmes -> Let todos os elementos
// [PUT] - /filmes/:id -> Alterar um único elemento
// [DELETE] - /filmes/:id -> Apagar um único elemento
