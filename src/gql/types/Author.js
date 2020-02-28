const { schemaComposer } = require('graphql-compose');

const ComplexTC = schemaComposer.createObjectTC(`
    type ComplexType {
     subField1: String!
    }`);

const AuthorTC = schemaComposer.createObjectTC({
  name: 'Author',
  fields: {
    id: 'Int!',
    firstName: 'String!',
    lastName: 'String',
    complex: ComplexTC,
  },
});
AuthorTC.addFields({
  firstName: {
    type: 'String',
    resolve: author => `Something${author.firstName}`,
  },
});

ComplexTC.addFields({
  subField1: {
    type: 'String',
    resolve: complex => {
      return `Something${complex.subField1}`;
    },
  },
});

exports.AuthorTC = AuthorTC;
