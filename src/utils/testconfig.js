const mongoose = require('mongoose');
const cuid = require('cuid');
const { connect } = require('./connect');

global.newId = () => {
  return mongoose.Types.ObjectId();
};

beforeEach(async done => {
  const db = cuid();
  function clearDB() {
    for (const i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function() {});
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
