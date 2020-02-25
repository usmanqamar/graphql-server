const queryFields = {
  users: {
    type: '[User]',
    resolve: async (_, __, { models: { User } }) => {
      const users = await User.find().exec();
      return users;
    },
  },
  userExists: {
    type: 'Boolean',
    args: { name: 'String!' },
    resolve: async (_, { name }, { models: { User } }) => {
      const user = await User.findOne({ name }).exec();
      return user !== null;
    },
  },
};

module.exports = queryFields;
