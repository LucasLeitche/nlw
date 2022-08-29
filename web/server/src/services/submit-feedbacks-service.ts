import { MailAdpter } from "../adapters/mail-adapters";
import { FeedbacksRepository } from "../repositories/feedbacks-repositoriy";

interface SubmitFeedbackServiceRequest{
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService{
    constructor(
        private feedbackRepository: FeedbacksRepository,
        private mailAdapter: MailAdpter
    ){}

    async execute(request : SubmitFeedbackServiceRequest){
        const { type, comment, screenshot } = request;
        await  this.feedbackRepository.create({
            type,
            comment ,
            screenshot
        })
        await this.mailAdapter.sendMail({
           subject: 'Novo Feedback',
           body: [
            `<div style="font-family: sans-serif; font-size: 16px; color: black">`,
                `<p> Tipo do feedback: ${type} </p>`,
                `<p> Comentario : ${comment} </p>`,
            '</div>'
            ].join('\n')
        })
    }
}