const { merge } = require('lodash');
const PostMutations = require('./Post');

const mutations = merge(PostMutations);

module.exports = mutations;
