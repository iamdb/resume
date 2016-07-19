import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import content from './queries/content';
import instagram from './queries/instagram';
import code from './queries/code';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      code,
      instagram,
      content,
    },
  }),
});

export default schema;
