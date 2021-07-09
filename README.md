# Laboratório de Backend e Banco de Dados com MongoDB

## **Tópicos**

- O que é banco de dados?
- Diferença entre SQL e NoSQL
- Um overview sobre os principais sistemas de gerenciamento de banco de dados SQL e NoSQL
  - **SQL:** MySQL, MariaDB, PostgreSQL, SQL Server, Oracle DB
  - **NoSQL:** MongoDB, Cassandra, DynamoDB, Firebase Realtime Database, Redis, Neo4j

- Query Languages (Linguagens de consulta)

- Apresentação dos softwares para utilização do MongoDB: Mongo Compass ou NoSQLBooster

- Criação da base de dados

- Explicação e Criação da collection

- Entendendo a query language do MongoDB

- Realizando operações simples (inserção, consulta, atualização e remoção) na base de dados

- Integração do MongoDB com o NodeJS utilizando a própria biblioteca do MongoDB

- Substituição das funções de backend desenvolvidas nas aulas anteriores para integrar o CRUD com a base de dados

## Explicação

- SQL (Structured Query Language)
  - Relacionais
- NoSQL (Not-only SQL)
  - Não-somente relacional
- MongoDB -> Consigo relacionar dados? De certa forma, sim.
- SQL
  - Tabelas
    - Cada tabela possui linhas e colunas
    - Linha representa registro
    - Coluna representa quais informações teremos para cada registro

| Tabela SQL: Filmes                                     |                                       |                             |                                        |           |
| ------------------------------------------------------ | ------------------------------------- | --------------------------- | -------------------------------------- | --------- |
|                                                        |                                       |                             |                                        |           |
| Schema                                                 |                                       |                             |                                        |           |
| ID                                                     | Número Inteiro                        | Auto-Increment              | Primary-Key                            |           |
| Nome                                                   | Texto                                 |                             | Unique Index (Único)                   |           |
| URL da Imagem                                          | Texto                                 |                             |                                        |           |
| Usuário ID                                             | Inteiro                               |                             | Foreign-Key (Chave Estrangeira)        |           |
| Orçamento                                              | Número Decimal                        |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
| ID                                                     | Nome                                  | URL da imagem               | Usuário ID (FK)                        | Orçamento |
| 1                                                      | Senhor dos Anéis: As Duas Torres      | [https://...](https://.../) | 1                                      | 0         |
| 2                                                      | Harry Potter                          | [https://...](https://.../) | 1                                      | 0         |
| 3                                                      | Senhor dos Anéis: A Sociedade do Anel |                             | 1                                      | 0         |
|                                                        |                                       |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
| Tabela  SQL: Personagens                               |                                       |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
| Schema                                                 |                                       |                             |                                        |           |
| ID                                                     | Número Inteiro                        | Auto-Increment              | Primary-Key                            |           |
| Nome                                                   | Texto                                 |                             | Unique Index (Único)                   |           |
| URL da Imagem                                          | Texto                                 |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
| ID                                                     | Nome                                  | URL da imagem               |                                        |           |
| 1                                                      | Frodo                                 |                             |                                        |           |
| 2                                                      | Bilbo                                 |                             |                                        |           |
| 3                                                      | Gandalf                               |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
| Tabela  SQL: Conectar Filmes e Personagens (JoinTable) |                                       |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
| Schema                                                 |                                       |                             |                                        |           |
| ID                                                     | Número Inteiro                        | Auto-Increment              | Primary-Key                            |           |
| Filme ID                                               | Número Inteiro                        |                             | Foreign-Key (Chave-Estrangeira ou  FK) |           |
| Personagem ID                                          | Número Inteiro                        |                             | Foreign-Key (Chave-Estrangeira ou  FK) |           |
|                                                        |                                       |                             |                                        |           |
| ID                                                     | Filme ID (FK)                         | Personagem ID (FK)          |                                        |           |
| 1                                                      | 1                                     | 1                           |                                        |           |
| 2                                                      | 1                                     | 2                           |                                        |           |
| 3                                                      | 1                                     | 3                           |                                        |           |
| 4                                                      | 3                                     | 1                           |                                        |           |
| 5                                                      | 3                                     | 2                           |                                        |           |
| 6                                                      | 3                                     | 3                           |                                        |           |
|                                                        |                                       |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
| Tabela  SQL: Usuários                                  |                                       |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
| Schema                                                 |                                       |                             |                                        |           |
| ID                                                     | Número Inteiro                        | Auto-Increment              | Primary-Key                            |           |
| Nome                                                   | Texto                                 |                             |                                        |           |
| Sobrenome                                              | Texto                                 |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |
| ID                                                     | Nome                                  |                             |                                        |           |
| 1                                                      | Paulo                                 | Salvatore                   |                                        |           |
| 2                                                      | Nilmara                               | Salgado                     |                                        |           |
| 3                                                      | José                                  | Garibardi                   |                                        |           |
| 4                                                      | Paulo                                 | Souza                       |                                        |           |
|                                                        |                                       |                             |                                        |           |
|                                                        |                                       |                             |                                        |           |

## Relações

| Relações                                 |
| ---------------------------------------- |
| 1 Filme por ter N personagens            |
| 1 Personagem por participar de N Filmes  |
|                                          |
| 1 Filme por ser adicionado por 1 Usuário |
| 1 Usuário pode adicionar N filmes        |
|                                          |
| Filme (One) x Personagens  (Many)        |
| Personagens (One) x Filmes  (Many)       |
|                                          |
| Filme (One) x Usuário (One)              |
| Usuário (One) x Filmes (Many)            |
|                                          |
| Filmes x Personagens (Many to  Many)     |
|                                          |
| Filmes x Usuários (ManyToOne)            |
| Usuários x Filmes (OneToMany)            |

## SQL (MySQL,  MariaDB, SQL Server, OracleDB) vs NoSQL (MongoDB)

- Tabelas viram Collections

- Collections são Schema-Less, ou seja, elas não possuem um "schema" definido

- MongoDB é um banco de dados orientado a DOCUMENTOS

  - Como é um documento?

    - ```js
      {
          "_id": ObjectId("507f191e810c19729de860ea"),
          "nome": "Senhor dos Anéis: As Duas Torres",
          "imagem_url": "https://...",
          "usuario_id": ObjectId("627f192e817c19729de860fb"),
          "personagens": [
              ObjectId("627f192e817c19729de860fb"),
              ObjectId("627f192e817c19729de860fc"),
              ObjectId("627f192e817c19729de860fd"),
              ObjectId("627f192e817c19729de860fe")
          ]
      }
      ```

  - Os documentos **podem** possuir estruturas diferentes

    - ```js
      {
          "id": 1,
          "nome": "Senhor dos Anéis: As Duas Torres",
          "imagem_url": "https://...",
          "usuario_id": 1,
          "orcamento": 0
      }
      ```

      
