import { GraphQLDate } from 'graphql-iso-date';
import { schemaComposer } from 'graphql-compose';

export const LogTC = schemaComposer.createObjectTC({
  name: 'Log',
  fields: {
    id: 'Int',
    result: 'Int',
    level: 'Int',
    ip: 'String!',
    journeyToken: 'String!',
    stepsCompleted: 'Int!',
    isCompleted: 'Boolean!',
    createdAt: GraphQLDate,
    updatedAt: GraphQLDate,
  },
});

const inputType = LogTC.getITC();
inputType.removeField('id');

export const LogITC = inputType;
