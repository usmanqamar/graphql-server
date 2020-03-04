import app from './app';

const { connect } = require('./utils/connect');

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  await connect();
  console.log(`🚀 The server is running at http://localhost:${PORT}/graphql`);
});
