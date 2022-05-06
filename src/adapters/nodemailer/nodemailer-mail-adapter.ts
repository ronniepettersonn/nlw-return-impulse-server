import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapters";

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        const transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "0d9e2491c32767",
                pass: "9462d266681051"
            }
        });

        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Ronnie Pettersonn <petterson28@hotmail.com>',
            subject,
            html: body,
        })
    };
}