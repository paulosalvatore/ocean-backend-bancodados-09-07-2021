const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

(async () => {
    const url = "mongodb://localhost:27017";
    const dbName = "ocean_bancodados_09_07_2021";

    console.info("Conectando ao banco de dados...");

    const client = await MongoClient.connect(url, { useUnifiedTopology: true });

    console.info("MongoDB conectado com sucesso!");

    const db = client.db(dbName);

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

    const filmes = db.collection("filmes");

    // [GET] - Read All
    app.get("/filmes", async (req, res) => {
        const listaFilmes = await filmes.find().toArray();

        res.send(listaFilmes);
    });

    // [GET] - Read Single (ou Read by ID/Index)
    app.get("/filmes/:id", async (req, res) => {
        const id = req.params.id;

        const item = await filmes.findOne({ _id: ObjectId(id) });

        res.send(item);
    });

    // [POST] - Create
    app.post("/filmes", async (req, res) => {
        const item = req.body;

        await filmes.insertOne(item);

        res.send(item);
    });

    // [PUT] - Update
    app.put("/filmes/:id", async (req, res) => {
        const id = req.params.id;

        const item = req.body;

        await filmes.updateOne({ _id: ObjectId(id) }, { $set: item });

        res.send(item);
    });

    // [DELETE] - Delete
    app.delete("/filmes/:id", async (req, res) => {
        const id = req.params.id;

        await filmes.deleteOne({ _id: ObjectId(id) });

        res.send("Item removido com sucesso.");
    });

    app.listen(3000);

    // Resumo dos endpoints:
    // [POST] - /filmes -> Adicionar um elemento
    // [GET] - /filmes/:id -> Ler um único elemento
    // [GET] - /filmes -> Let todos os elementos
    // [PUT] - /filmes/:id -> Alterar um único elemento
    // [DELETE] - /filmes/:id -> Apagar um único elemento
})();
