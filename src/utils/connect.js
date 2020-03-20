const mongoose = require('mongoose');
require('custom-env').env();

// mongoose.connection.on('error', err => {
//   console.log(`MongoDB connection error: ${err}`);
//   process.exit(-1);
// });
module.exports.connect = () => {
  const { DB_CONN_STRING } = process.env;

  return mongoose.connect(DB_CONN_STRING, {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 2000,
  });
};
