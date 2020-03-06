import { LogTC } from '../Log';

const expectedFields = [
  'id',
  'result',
  'level',
  'ip',
  'journeyToken',
  'stepsCompleted',
  'isCompleted',
  'createdAt',
];

describe('Log type model', () => {
  test.only('Log type should have necessary fields in ', async () => {
    expect(LogTC.getFieldNames()).toEqual(expect.arrayContaining(expectedFields));
  });
});
