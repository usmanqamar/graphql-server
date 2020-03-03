import ejs from 'ejs';
import appRoot from 'app-root-path';
import { Mailer } from '../../lib/mail';

const queryFields = {
  logs: {
    type: '[Log]',
    resolve: async (_, __, { models: { Log } }) => {
      const users = await Log.find().exec();
      return users;
    },
  },
  sendMail: {
    type: 'String',
    args: { ip: 'String', level: 'Int', score: 'Int' },
    resolve: async (_, { ip, score, level }) => {
      const content = await ejs.renderFile(`${appRoot}/src/templates/emails/result.ejs`, {
        ip,
        score,
        level,
      });

      const mailer = new Mailer('nodemailer', {
        to: process.env.SALES_EMAIL,
        subject: 'testing',
        content,
      });
      await mailer.sendMail();
      return 'done';
    },
  },
};

module.exports = queryFields;