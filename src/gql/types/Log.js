import { GraphQLDate } from 'graphql-iso-date';
import { schemaComposer } from 'graphql-compose';

export const LevelETC = schemaComposer.createEnumTC({
  name: 'LevelEnum',
  values: {
    CRAWL: { value: 'CRAWL' },
    WALK: { value: 'WALK' },
    STANDUP: { value: 'STANDUP' },
    RUN: { value: 'RUN' },
  },
});
export const LogTC = schemaComposer.createObjectTC({
  name: 'Log',
  fields: {
    id: 'String',
    result: 'Int',
    level: 'LevelEnum',
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
