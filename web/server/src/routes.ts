// Quando uso um arquivo de rotas com express 

import express from "express";
import nodemailer from 'nodemailer';
import { NodemailerMailAdpter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import {prisma} from './prisma';
import { PrismaFeedbacksRepository } from "./repositories/Prisma/prisma-feedbacks-repository";
import { SubmitFeedbackService } from "./services/submit-feedbacks-service";

export const routes = express.Router(); // Necessario chmamar o express.Router quando é utilizado arquivo de rotas separado do server 

routes.use(express.json());



routes.post('/feedbacks', async (req, res) =>{

    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

    const nodemailerMailAdapter = new NodemailerMailAdpter();

    const submitFeedbackService = new SubmitFeedbackService(
      prismaFeedbacksRepository, nodemailerMailAdapter
    )

    
    await submitFeedbackService.execute({
      type,
      comment,
      screenshot
    })

    
    return res.status(201).send('Enviado com sucesso') // Status de criação | Quando quero sinalizar que alguma coisa foi criada
})
