const queryFields = {
  logs: {
    type: '[Log]',
    resolve: async (_, __, { models: { Log } }) => {
      const users = await Log.find().exec();
      return users;
    },
  },
};

module.exports = queryFields;
