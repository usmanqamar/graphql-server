const { User, userSchema } = require('../user');

describe('User model', () => {
  const sample = { email: 'user@test.com', name: 'User Name' };

  test('User schema should have necessary fields in ', async () => {
    const fields = ['name', 'email', 'lastSurveyDate', 'lastSurveyResult'];

    expect(Object.keys(userSchema.paths)).toEqual(expect.arrayContaining(fields));
    expect(userSchema.path('email').isRequired).toEqual(true);
  });

  test('User should have email unique ', async () => {
    expect.assertions(1);
    try {
      await User.init();
      await User.create(sample);
      await User.create(sample);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  test('User should have email unique ', async () => {
    expect.assertions(1);
    try {
      await User.init();
      await User.create(sample);
      await User.create(sample);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
