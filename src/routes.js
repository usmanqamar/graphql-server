import graphqlHTTP from 'express-graphql';
import * as express from 'express';
import { schema } from './gql/schema';
import models from './models';

const router = express.Router();

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
