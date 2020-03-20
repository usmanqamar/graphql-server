import tester from '../../../utils/gql-test';
import models from '../../../models';

jest.mock('../../../lib/mail');
/* eslint-disable no-console */

describe('Log Query', () => {
  test('getLogs ', done => {
    const query = `
     query getLogs {
      logs {
        ip
      }
    }
    `;

    tester
      .graphql(query, {}, { models }, { isLocal: false })
      .then(result => {
        expect(result.data.logs).toEqual([]);
        done();
      })
      .catch(err => console.log(err));
  });

  test('sendMail ', async done => {
    const query = `
     query sendMail {
      sendMail
    }
    `;

    tester
      .graphql(query, {}, { models }, { isLocal: false })
      .then(result => {
        expect(result.data.sendMail).toEqual('done');
        done();
      })
      .catch(err => console.log(err));

    done();
  });
});
