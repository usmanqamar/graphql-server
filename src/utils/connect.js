const mongoose = require('mongoose');
require('custom-env').env();

// mongoose.connection.on('error', err => {
//   console.log(`MongoDB connection error: ${err}`);
//   process.exit(-1);
// });
module.exports.connect = () => {
  //const { DB_HOST, DB_USER, DB_PASS, DB_PORT, DB_NAME } = process.env;

  return mongoose.connect(
//    `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
      `mongodb+srv://agilemm_root:3C98fgUk2AYMMj9K@agilemm-xacv3.mongodb.net/agilemm?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  );
};
