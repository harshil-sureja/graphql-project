import graphql, {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import PostType from './PostType.js';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    posts: {
      type: new GraphQLList(PostType),
    },
  }),
});
export default UserType;
