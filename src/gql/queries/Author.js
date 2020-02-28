const { find } = require('lodash');

const queryFields = {
  author: {
    type: 'Author',
    args: { id: 'Int' },
    resolve: (_, { id }) => find([], { id }),
  },
  authors: {
    type: '[Author]',
    resolve: () => [],
  },
};

module.exports = queryFields;
