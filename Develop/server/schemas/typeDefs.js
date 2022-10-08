const { gql } = require('apollo-server-express');

// typeDefs formatted according to challenge instructions

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    posts: [String]
    comments: [String]
    friends: [String]
  }

  type Post {
    _id: ID!
    postContent: String!
    upvotes: Int
    createdAt: String
    username: String!
    comments: [String]
  }

  type Comment {
    _id: ID!
    commentContent: String!
    upvotes: Int
    createdAt: String
    postId: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
    posts: [Post]
    comments(postId: String!): [Comment]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postContent: String!): User
    addComment(commentContent: String!): User
    addFriend(userId: String!): User
    upvotePost(postId: String!): Post
    upvoteComment(commentId: String!): Comment
    removePost(postId: String!): User
    removeComment(commentId: String!): User
  }
`;

module.exports = typeDefs;