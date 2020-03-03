import graphqlHTTP from 'express-graphql';
import * as express from 'express';
import ejs from 'ejs';
import { Mailer } from './lib/mail';

const { schema } = require('./gql/schema');
const models = require('./models');

const router = express.Router();

router.all('/sendmail', async (req, res) => {
  console.log(req.body)
  const content = await ejs.renderFile(`${__dirname}/templates/emails/result.ejs`, {
    name: 'Stranger',
  });

  const mailer = new Mailer('nodemailer', {
    to: process.env.SALES_EMAIL,
    subject: 'testing',
    content,
  });
  //await mailer.sendMail();
  res.send('done');
});

router.all(
  '/graphql',
  // eslint-disable-next-line no-unused-vars
  graphqlHTTP(async (request, response, graphQLParams) => {
    return {
      schema,
      graphiql: true,
      context: {
        req: request,
        models,
      },
    };
  })
);

export default router;
