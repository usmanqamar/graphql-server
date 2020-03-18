import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./features/result.feature');

defineFeature(feature, test => {
  test('1 + 1', ({ given, when, then }) => {
    let start;

    given('I start with 1', () => {
      start = 1;
    });

    when('I add 1', () => {
      start += 1;
    });

    then('I end up with 2', () => {
      expect(start).toBe(2);
    });
  });

  test('1 + 0', ({ given, when, then }) => {
    let start;

    given(/^I start with (\d+)$/, i => {
      start = parseInt(i, 10);
    });

    when(/^I add (\d+)$/, add => {
      start += parseInt(add, 10);
    });

    then(/^I end up with (\d+)$/, result => {
      expect(start).toBe(parseInt(result, 10));
    });
  });
});
