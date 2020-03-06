const { merge } = require('lodash');
const LogQueries = require('./Log');

const query = merge(LogQueries);

module.exports = query;
