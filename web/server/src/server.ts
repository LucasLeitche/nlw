// GET, POST , PUT, PATCH, DELETE

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PACTH = Atualizar  uma informação única de uma entidade
// DELETE = Deletar uma informação

import express from 'express';
import { routes } from './routes';


const app = express(); //criando a aplicação
app.use(routes) // Para usar as rotas

app.use(express.json());

app.listen(3333, () => {
    // Função será executada assim que o servidor estiver no ar
    console.log('HTTP server running!');
}) // Passando a porta que ela ira escutar
