import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const PhotographyType = new ObjectType({
  name: 'Photography',
  fields: {
    smallThumb: {
      type: StringType,
      resolve(obj) {
        return obj.small_thumb;
      }
    },
    largeThumb: {
      type: StringType,
      resolve(obj) {
        return obj.large_thumb;
      }
    },
    caption: {
      type: StringType,
      resolve(obj) {
        return obj.metadata && obj.metadata.caption;
      }
    }
  }
});

export default PhotographyType;
