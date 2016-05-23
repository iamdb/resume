import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const InstagramType = new ObjectType({
  name: 'Instagram',
  fields: {
    url: {
      type: StringType,
      resolve(obj) {
        return obj.images.standard_resolution.url;
      }
    },
    likes: {
      type: StringType,
      resolve(obj) {
        return obj.likes.count;
      }
    },
    width: {
      type: StringType,
      resolve(obj) {
        return obj.images.standard_resolution.width;
      }
    },
    height: {
      type: StringType,
      resolve(obj) {
        return obj.images.standard_resolution.height;
      }
    }
  },
});

export default InstagramType;
