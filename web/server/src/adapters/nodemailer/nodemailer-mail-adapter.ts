import nodemailer from 'nodemailer';
import { MailAdpter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ef25c66a0c04d3",
      pass: "0ef8607c67698b"
    }
  });

export class NodemailerMailAdpter implements MailAdpter{
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from : 'Equipe Feedget <oi@feedget.com>',
            to : 'Lucas Leite <llneves019@gmail.com>',
            subject : subject,
            html : body
        })
    }  
}