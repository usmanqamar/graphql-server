const { filter, find } = require('lodash');

const { AuthorTC } = require('./Author');
const { PostTC } = require('./Post');

AuthorTC.addFields({
  posts: {
    type: [PostTC],
    resolve: author => filter([], { authorId: author.id }),
  },
  postCount: {
    type: 'Int',
    description: 'Number of Posts written by Author',
    resolve: author => filter([], { authorId: author.id }).length,
  },
});

PostTC.addFields({
  author: {
    type: AuthorTC,
    resolve: post => find([], { id: post.authorId }),
  },
});
