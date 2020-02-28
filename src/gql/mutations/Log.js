import { LogITC } from '../types/Log';

const mutation = {
  addLog: {
    type: 'Log',
    args: { data: LogITC },
    resolve: async (_, { data }, { models: { Log } }) => {
      const log = await Log.createLog(data);
      return log;
    },
  },
};

module.exports = mutation;
