import * as mailer from 'nodemailer-promise';
var path = require('path');

class NodeMailer {
  constructor({ to, subject, content }) {
    this.to = to;
    this.subject = subject;
    this.content = content;
    this._getConfig();
  }

  _getConfig() {
    this.mail = mailer.config({
      service: 'gmail',
      auth: {
        user: process.env.SMTPUSER,
        pass: process.env.SMTPPASS,
      },
    });

    this.mailOptions = {
      from: 'usmanqamar189@gmail.com', // sender address
      to: this.to,
      subject: this.subject,
      html: this.content, // plain text body
      attachments: [{
        filename: 'Logo.png',
        path: 'assets/logo.jpg',
        cid: 'logo'
      }]
    };
  }
  async sendMail() {
    return await this.mail(this.mailOptions);
  }

}

export class Mailer {
  constructor(lib, data) {
    if(lib === 'nodemailer') {
      return new NodeMailer(data)
    } else {
      return new NodeMailer(data)
    }
  }
}
