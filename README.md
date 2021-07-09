## Backend com NodeJS e Express - Parte 1

## **Tópicos**

- O que exatamente é backend?
- Evolução do Backend
- REST (Verbos de comunicação: GET, POST, PUT, DELETE)
- JSON
- Postman (Criando/fazendo requisições e organizando em collections)
- JSON Viewer
- JavaScript: do frontend para o backend
- NodeJS
- Package Json
- NPM (Node Package Manager)
- Benchmarking
- Criação do projeto
- Início do desenvolvimento da aplicação CRUD
  - Create, Read (All/Single), Update & Delete
  - Criar, Ler (Tudo ou Individual), Atualizar e Remover

- Node Express

- Body-Parser

## **Dúvidas/Pensamentos/Curiosidades**

- Q raios é node? Pq ele existe se eu quero rodar JS??
- como e trabalhar js no back
- conexão com api
- como eu rodo na hospedagem?
- As requisições e a arquitetura rest
- Qual a programação adequada à ser utilizada
- Qual exatamente é a definição de backend?
- existe algo parecido com o node, pra entender melhor o que ele faz?
- Backend - servidor; api; acesso ao DB; protocolos de comunicação http
- Como gravar dados localmente e atualizar um banco de dados automaticamente quando a conexão estiver disponível?
- integração com o bd
- qual a diferença do frontend
- e o frontend do node
- Como aprender a parte do backend desde o começo?
- nodejs com typescript?
- padrao de projeto com node?

## **Dúvidas estruturadas em tópicos:**

- Fundamentos de Backend
  - O que é NodeJS?
  - Qual linguagem programação?
    - Quando usar Node e quando usar linguagens como PHP, JSP, Python?
  - Requisições HTTP
- Backend vs Frontend
- Vantagens do fullstack baseado em js
- Backend + Banco de Dados
  - Como persistir as informações?
  - E se tiver sem conexão com o banco, como persistir assim que a conexão estabelecer?
- Como publicar/deploy um app NodeJS em Cloud
- E o TypeScript?
- Qual padrão projeto devo seguir em NodeJS?
- Celery e rabit fazem essa sub divisão no backend?
- Typescript não é apenas uma abordagem para tipar o código em JS?
- não sei se ja explicou, mas o que é esse json?

## O que é backend?

- **1 camada** (PC/Servidor)
  - Geralmente acessada pelo terminal
- **2 camadas** (Frontend e Backend)
  - Frontend e Backend podem estar na mesma aplicação
  - Frontend e Backend podem estar em aplicações separadas
  - **Frontend:**
    - Aspecto visual da aplicação
    - UI - User Interface ou Interface de Usuário
  - **Backend:**
    - Processamento de dados da aplicação
- **Multicamadas** (vários Frontends/vários Backends)
  - Micro-frontend (Frontend dividido em várias partes/aplicações)
  - Microsserviços (são serviços de Backend)

## Backend

- **Linguagens de programação:** PHP, JavaScript, Java, Kotlin, C#, C++, Python, TypeScript, etc.
- **Onde entra o NodeJS?**
  - O NodeJS é um motor (software) capaz de interpretar JavaScript e executar utilizando uma outra linguagem.
    - O NodeJS é escrito em C++.
  - O propósito do NodeJS é interpretar JavaScript no Servidor

## Frontend

- **Linguagens:** HTML (marcação), CSS (estilização) e JavaScript (programação)

## Interpretador vs Compilador

**Linguagem interpretada (ex: Python, JavaScript, PHP, etc):** Pega um script, interpreta e executa.

**Linguagem compilada (ex: Java, C++, C#, etc):** Pega um script, transforma em um arquivo binário e esse arquivo binário que é executado.

