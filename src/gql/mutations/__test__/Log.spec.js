import tester from '../../../utils/gql-test';
import models from '../../../models';

describe('Log Mutation', () => {
  test('addLog ', done => {
    const mutation = `
        mutation addLog($data: LogInput!) {
          addLog(data: $data) {
           ip
          }
        }
      `;
    tester
      .graphql(
        mutation,
        {},
        { models },
        { data: { ip: '1', journeyToken: 'a', stepsCompleted: 1, isCompleted: false } }
      )
      .then(result => {
        expect(result.data.addLog).toEqual({ ip: '1' });
        done();
      })
      .catch(err => console.log(err));
  });
});
