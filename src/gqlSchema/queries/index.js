const { merge } = require('lodash');
const PostQueries = require('./Post');
const AuthorQueries = require('./Author');
const UserQueries = require('./User');

const query = merge(PostQueries, AuthorQueries, UserQueries);

module.exports = query;
