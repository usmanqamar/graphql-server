const { posts } = require('../../data');

const queryFields = {
  posts: {
    type: '[Post]',
    resolve: () => posts,
  },
};

module.exports = queryFields;
