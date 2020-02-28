const { merge } = require('lodash');
const PostQueries = require('./Post');
const AuthorQueries = require('./Author');
const LogQueries = require('./Log');

const query = merge(PostQueries, AuthorQueries, LogQueries);

module.exports = query;
