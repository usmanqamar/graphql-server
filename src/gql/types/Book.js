import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';
import { Book } from '../../models/books';

const customizationOptions = {};

const BookTC = composeWithMongoose(Book, customizationOptions);
BookTC.addResolver({
  name: 'someOperation',
  args: { id: 'Int' },
  type: BookTC,
  resolve: async ({ source, args }) => {
    return [];
  },
});
schemaComposer.Query.addFields({
  bookById: BookTC.getResolver('someOperation'),
});
