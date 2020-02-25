const { filter, find } = require('lodash');
const { posts, authors } = require('../../data');

const { AuthorTC } = require('./Author');
const { PostTC } = require('./Post');

AuthorTC.addFields({
  posts: {
    type: [PostTC],
    resolve: author => filter(posts, { authorId: author.id }),
  },
  postCount: {
    type: 'Int',
    description: 'Number of Posts written by Author',
    resolve: author => filter(posts, { authorId: author.id }).length,
  },
});

PostTC.addFields({
  author: {
    type: AuthorTC,
    resolve: post => find(authors, { id: post.authorId }),
  },
});
