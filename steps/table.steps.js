import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./features/table.feature');

defineFeature(feature, test => {
  test('adding', ({ given, when, then }) => {
    let start;

    given(/^I start with (\d+)$/, input => {
      start = parseInt(input, 10);
    });

    when(/^I add (\d+)$/, add => {
      start += parseInt(add, 10);
    });

    then(/^I end up with (\d+)$/, result => {
      expect(start).toBe(parseInt(result, 10));
    });
  });
});
