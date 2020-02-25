const { schemaComposer } = require('graphql-compose');
require('./types');
const query = require('./queries');
const mutations = require('./mutations');

schemaComposer.Query.addFields(query);
schemaComposer.Mutation.addFields(mutations);

module.exports.schema = schemaComposer.buildSchema();
