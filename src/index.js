/* eslint-disable no-unused-vars */
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema } = require('./gqlSchema/schema');
const models = require('./Models');
const { connect } = require('./utils/connect');
//require('custom-env').env();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(
  '/graphql',
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

app.listen(PORT, async () => {
  await connect();
  console.log(`🚀 The server is running at http://localhost:${PORT}/graphql`);
});
