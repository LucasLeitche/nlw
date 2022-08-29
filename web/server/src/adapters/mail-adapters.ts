export interface SendMailData {
    subject: string,
    body: string
}

export interface MailAdpter {
    sendMail: (data: SendMailData) => Promise<void>;
}