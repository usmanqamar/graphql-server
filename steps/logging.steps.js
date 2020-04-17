import { defineFeature, loadFeature } from 'jest-cucumber';
import tester from '../src/utils/gql-test';
import models from '../src/models';

const feature = loadFeature('./features/logging.feature');

defineFeature(feature, test => {
  test('Incomplete journey', ({ given, when, then }) => {
    let mutation;
    let data;
    let result;
    given('I prepare required data for api', () => {
      data = { data: { ip: '1', journeyToken: 'a', stepsCompleted: 1, isCompleted: false } };

      mutation = `
        mutation addLog($data: LogInput!) {
          addLog(data: $data) {
           ip
           isCompleted
          }
        }
      `;
    });

    when('I hit the logging api', () => {
      return new Promise((resolve, reject) => {
        tester
          .graphql(mutation, {}, { models }, data)
          .then(res => {
            result = res.data.addLog;
            resolve();
          })
          .catch(err => reject(err));
      });
    });

    then(/^the api should respond with isCompleted (true|false)$/, input => {
      // eslint-disable-next-line no-eval
      expect(result.isCompleted).toEqual(eval(input));
    });

    then('with provided data', () => {
      expect(result.ip).toBe(data.data.ip);
    });
  });

  test('Complete journey', ({ given, when, then }) => {
    let mutation;
    let data;
    let result;
    given('I prepare required data for api', () => {
      data = { data: { ip: '1', journeyToken: 'a', stepsCompleted: 4, isCompleted: true } };

      mutation = `
        mutation addLog($data: LogInput!) {
          addLog(data: $data) {
           ip
           isCompleted
          }
        }
      `;
    });

    when('I hit the logging api', () => {
      return new Promise((resolve, reject) => {
        tester
          .graphql(mutation, {}, { models }, data)
          .then(res => {
            result = res.data.addLog;
            resolve();
          })
          .catch(err => reject(err));
      });
    });

    then(/^the api should respond with isCompleted (true|false)$/, input => {
      // eslint-disable-next-line no-eval
      expect(result.isCompleted).toEqual(eval(input));
    });

    then('with provided data:', table => {
      console.log(table);

      expect(result.ip).toBe(data.data.ip);
    });
  });
});
