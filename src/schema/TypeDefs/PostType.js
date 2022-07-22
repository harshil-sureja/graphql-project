import graphql, {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    userId: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    subTitle: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    date: {
      type: GraphQLString,
    },
    likes: {
      type: GraphQLInt,
    },
    comments: {
      type: GraphQLInt,
    },
  }),
});
export default PostType;
