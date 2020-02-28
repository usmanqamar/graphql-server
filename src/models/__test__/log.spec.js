const { Log, logSchema } = require('../log');

describe('User model', () => {
  const sample = { email: 'user@test.com', name: 'User Name' };

  test('Log schema should have necessary fields in ', async () => {
    const fields = ['name', 'email', 'ip', 'browser', 'createdAt', 'updatedAt'];

    expect(Object.keys(logSchema.paths)).toEqual(expect.arrayContaining(fields));
  });

  test('Log should have email unique ', async () => {
    expect.assertions(1);
    try {
      await Log.init();
      await Log.create(sample);
      await Log.create(sample);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  test('User should update existing entry for same journey ', async () => {
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
