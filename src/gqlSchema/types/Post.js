const { schemaComposer } = require('graphql-compose');

const PostTC = schemaComposer.createObjectTC({
  name: 'Post',
  fields: {
    id: 'Int!',
    title: 'String',
    votes: 'Int',
    authorId: 'Int',
  },
});
exports.PostTC = PostTC;
