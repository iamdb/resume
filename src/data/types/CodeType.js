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
    description: {
      type: StringType,
      resolve(obj) {
        return obj.description;
      }
    },
    buttonText: {
      type: StringType,
      resolve(obj) {
        return obj.buttonText;
      }
    },
    tags: {
      type: StringType,
      resolve(obj) {
        return obj.tags;
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
