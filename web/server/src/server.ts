
// GET, POST , PUT, PATCH, DELETE

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PACTH = Atualizar  uma informação única de uma entidade
// DELETE = Deletar uma informação


import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';


const app = express(); //criando a aplicação

app.use(express.json());

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ef25c66a0c04d3",
      pass: "0ef8607c67698b"
    }
  });

app.post('/feedbacks', async (req, res) =>{

    const { type, comment, screenshot } = req.body

    const feedback = await prisma.feedback.create({
        data:{
            type,
            comment,
            screenshot
        }
    })

    await transport.sendMail({
        from : 'Equipe Feedget <oi@feedget.com>',
        to : 'Lucas Leite <llneves019@gmail.com>',
        subject : 'Novo Feedback',

        html : [
            `<div style="font-family: sans-serif; font-size: 16px; color: black">`,
            `<p> Tipo do feedback: ${type}</p>`,
            `<p>Comentario : ${comment} </p>`,
            '</div>'
        ].join('\n')
    })
    return res.status(201).json(feedback) // Status de criação | Quando quero sinalizar que alguma coisa foi criada
})

app.listen(3333, () => {
    // Função será executada assim que o servidor estiver no ar
    console.log('HTTP server running!');
}) // Passando a porta que ela ira escutar

