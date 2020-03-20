import app from './app';

const { connect } = require('./utils/connect');

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  try {
    await connect();
    // eslint-disable-next-line no-console
    console.log(`🚀 The server is running at http://localhost:${PORT}/graphql`);
  } catch (e) {
    console.log('here', e);
  }
});
