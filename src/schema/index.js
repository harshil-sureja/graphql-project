import graphql, {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import UserType from './TypeDefs/UserType.js';
import userData from '../data/usermockdata.json';
import postData from '../data/postmockdata.json';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: {
        // id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return userData;
      },
    },
    // getUserById
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
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
      },
      resolve(parent, args) {
        userData.push({
          id: '1234-asdf234-fda',
          firstName: args.firstName,
          lastName: args.lastName,
          address: args.address,
          city: args.city,
          phone: args.phone,
          email: args.email,
          password: args.password,
        });
        return args;
      },
    },
  },
});

export default new GraphQLSchema({ query: RootQuery, mutation: Mutation });
