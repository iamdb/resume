import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const CodeType = new ObjectType({
  name: 'Code',
  fields: {
    title: {
      type: StringType,
      resolve(obj) {
        return obj.title;
      }
    },
    url: {
      type: StringType,
      resolve(obj) {
        return obj.url;
      }
    },
    slug: {
      type: StringType,
      resolve(obj) {
        return obj.title_slug;
      }
    },
  },
});

export default CodeType;
