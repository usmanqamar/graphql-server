import { defineFeature, loadFeature } from 'jest-cucumber';
// import tester from '../src/utils/gql-test';
// import models from '../src/models';

const feature = loadFeature('./features/email.feature');

defineFeature(feature, test => {
  test('Email sending', ({ given, when, then }) => {
    // let query;
    // let data;
    // let result;
    given('I prepare required data for email sending', () => {
      // data = { data: { ip: '1', journeyToken: 'a', stepsCompleted: 1, isCompleted: false } };
      //
      // query = `
      //   query posts {
      //     sendMail(ip: "127.0.0.1", level: CRAWL, score: 10)
      //   }
      // `;
    });

    when('I hit the email sending', () => {
      // return new Promise((resolve, reject) => {
      //   tester
      //     .graphql(query, {}, { models }, data)
      //     .then(res => {
      //       result = res.data.sendMail;
      //       resolve();
      //     })
      //     .catch(err => reject(err));
      // });
    });

    then('the api should respond with success', () => {
      // eslint-disable-next-line no-eval
      // expect(result).toBeDefined();
    });
  });
});
