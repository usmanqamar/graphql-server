import EasyGraphQLTester from 'easygraphql-tester';
import { schema } from '../gql/schema';

const tester = new EasyGraphQLTester(schema);
export default tester;
