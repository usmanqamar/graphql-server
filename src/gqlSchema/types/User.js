import { GraphQLDate } from 'graphql-iso-date';
import { schemaComposer } from 'graphql-compose';

export const UserTC = schemaComposer.createObjectTC({
  name: 'User',
  fields: {
    id: 'Int!',
    name: 'String!',
    email: 'String',
    lastSurveyResult: 'Int',
    lastSurveyDate: GraphQLDate,
    createdAt: GraphQLDate,
    updatedAt: GraphQLDate,
  },
});
