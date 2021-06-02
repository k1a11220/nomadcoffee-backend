import { gql } from "apollo-server";

export default gql`
  type unfollowUserResult {
    ok: String!
    error: String
  }
  type Mutation {
    unfollowUser(username: String!): unfollowUserResult!
  }
`;
