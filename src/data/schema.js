import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import content from './queries/content';
import photography from './queries/photography';
import code from './queries/code';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: () => ({
      code,
      photography,
      content,
    }),
  }),
});

export default schema;
