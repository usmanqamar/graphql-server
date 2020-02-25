const { find } = require('lodash');

const { authors } = require('../../data');

const queryFields = {
  author: {
    type: 'Author',
    args: { id: 'Int' },
    resolve: (_, { id }) => find(authors, { id }),
  },
  authors: {
    type: '[Author]',
    resolve: () => authors,
  },
};

module.exports = queryFields;
