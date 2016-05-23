import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import content from './queries/content';
import instagram from './queries/instagram';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      instagram,
      content,
    },
  }),
});

export default schema;
