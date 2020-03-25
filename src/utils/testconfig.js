const mongoose = require('mongoose');
const { connect } = require('./connect');

jest.setTimeout(30000);

global.newId = () => {
  return mongoose.Types.ObjectId();
};
beforeEach(async done => {
  function clearDB() {
    for (const i in mongoose.connection.collections) {
      if (mongoose.connection.collections.hasOwnProperty(i)) {
        mongoose.connection.collections[i].remove(function() {});
      }
    }
    return done();
  }
  if (mongoose.connection.readyState === 0) {
    // eslint-disable-next-line no-useless-catch
    try {
      await connect();
      clearDB();
    } catch (e) {
      throw e;
    }
  } else {
    clearDB();
  }
});
afterEach(async done => {
  await mongoose.disconnect();
  return done();
});
afterAll(done => {
  return done();
});
