const { merge } = require('lodash');
const LogMutations = require('./Log');

const mutations = merge(LogMutations);

module.exports = mutations;
