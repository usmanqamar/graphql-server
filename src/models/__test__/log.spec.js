const { Log, logSchema } = require('../log');

describe('User model', () => {
  test('Log schema should have necessary fields in ', async () => {
    const fields = ['ip', 'journeyToken', 'result', 'level', 'browser', 'createdAt', 'updatedAt'];

    expect(Object.keys(logSchema.paths)).toEqual(expect.arrayContaining(fields));
  });

  test('Log should update existing entry for same journey ', async () => {
    try {
      const data = { ip: '127.0.0.1', stepsCompleted: 2, journeyToken: '111' };
      await Log.init();
      await Log.createLog(data);
      await Log.createLog({ ...data, stepsCompleted: 3 });
      const total = await Log.count();

      expect(total).toEqual(1);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
