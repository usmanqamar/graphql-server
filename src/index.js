import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';

const cors = require('cors');
const { connect } = require('./utils/connect');

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.use(express.static(`${__dirname}/templates`));

app.listen(PORT, async () => {
  await connect();
  console.log(`🚀 The server is running at http://localhost:${PORT}/graphql`);
});
