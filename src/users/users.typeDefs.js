import { gql } from "apollo-server-core";

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
    name: String!
    location: String!
    avatarURL: String
    githubUsername: String
    createdAt: String!
    updatedAt: String!
    following: [User]
    followers: [User]
    totalFollowing: Int!
    totalFollowers: Int!
    bio: String
    isMe: Boolean!
    isFollowing: Boolean!
  }
`;
