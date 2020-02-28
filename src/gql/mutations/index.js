const { merge } = require('lodash');
const PostMutations = require('./Post');
const LogMutations = require('./Log');

const mutations = merge(PostMutations, LogMutations);

module.exports = mutations;
