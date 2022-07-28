// Quando uso um arquivo de rotas com express 

import express from "express";
import nodemailer from 'nodemailer';
import {prisma} from './prisma';

export const routes = express.Router(); // Necessario chmamar o express.Router quando é utilizado arquivo de rotas separado do server 

routes.use(express.json());

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ef25c66a0c04d3",
      pass: "0ef8607c67698b"
    }
  });

routes.post('/feedbacks', async (req, res) =>{

    const { type, comment, screenshot } = req.body

    const feedback = 

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
