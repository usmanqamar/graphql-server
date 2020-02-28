import routes from './routes';

const express = require('express');
const cors = require('cors');
const { connect } = require('./utils/connect');

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(routes);

app.listen(PORT, async () => {
  await connect();
  console.log(`🚀 The server is running at http://localhost:${PORT}/graphql`);
});
