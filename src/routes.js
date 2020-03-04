import graphqlHTTP from 'express-graphql';
import * as express from 'express';

const { schema } = require('./gql/schema');
const models = require('./models');

const router = express.Router();

// router.all('/sendmail', async (req, res) => {
//   const { ip, score, level } = req.body;
//   const content = await ejs.renderFile(`${__dirname}/templates/emails/result.ejs`, {
//     ip,
//     score,
//     level
//   });
//
//   const mailer = new Mailer('nodemailer', {
//     to: process.env.SALES_EMAIL,
//     subject: 'testing',
//     content,
//   });
//   await mailer.sendMail();
//   res.send('done');
// });

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
