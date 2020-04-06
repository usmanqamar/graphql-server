const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const logSchema = new Schema(
  {
    journeyToken: {
      type: String,
      required: true,
    },
    browser: String,
    ip: {
      type: String,
      required: true,
    },
    stepsCompleted: Number,
    isCompleted: Boolean,
    result: {
      type: Number,
      default: null,
    },
    level: {
      type: String,
      enum: ['CRAWL', 'EXPERT', 'STAND', 'RUN'],
      default: 'CRAWL',
    },
  },
  { timestamps: true }
);

logSchema.statics.createLog = async function(data) {
  let log = await this.model('log')
    .findOne({ journeyToken: data.journeyToken })
    .exec();
  if (log) {
    log.updatedAt = new Date();
    log.stepsCompleted = data.stepsCompleted;
    log.result = data.result;
    log.level = data.level;
    await log.save();
  } else {
    log = await this.model('log').create(data);
  }
  return log;
};

const Log = mongoose.model('log', logSchema);

module.exports = {
  logSchema,
  Log,
};
