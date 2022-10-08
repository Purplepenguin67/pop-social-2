import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
        _id
        username
        email
        posts
        comments
        friends
    }
  }
`;

export const GET_USER = gql`
  query user($username: String!) {
    user(username: $userId) {
        _id
        username
        email
        posts
        comments
        friends
    }
  }
`;

export const GET_POSTS = gql`
  query posts {
    posts {
      _id
      postContent
      upvotes
      createdAt
      username
      comments
    }
  }
`;

export const GET_COMMENTS = gql`
  query comments($postId: String!) {
    comments(postId: $postId) {
      _id
      commentContent
      upvotes
      createdAt
      post_id
      username
    }
  }
`;

// export const GET_POST = gql`
//   query getPost($postId: String!) {
//     getPost(postId: $postId) {
//         _id
//         postContent
//         imageContent
//         upvotes
//         user_id
//     }
//   }
// `;