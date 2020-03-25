import ejs from 'ejs';
import appRoot from 'app-root-path';
import { Mailer } from '../../lib/mail';
import { SALES_EMAIL } from '../../utils/constants';

const queryFields = {
  logs: {
    type: '[Log]',
    resolve: async (_, __, { models: { Log } }) => {
      const logs = await Log.find().exec();
      return logs;
    },
  },
  sendMail: {
    type: 'JSON',
    args: { ip: 'String', level: 'LevelEnum', score: 'Int' },
    resolve: async (_, { ip, score, level }) => {
      const content = await ejs.renderFile(`${appRoot}/src/templates/emails/result.ejs`, {
        ip,
        score,
        level,
      });

      const mailer = new Mailer('nodemailer', {
        to: SALES_EMAIL,
        subject: 'Test Subject',
        content,
      });

      const result = await mailer.sendMail();
      return result;
    },
  },
};

module.exports = queryFields;
