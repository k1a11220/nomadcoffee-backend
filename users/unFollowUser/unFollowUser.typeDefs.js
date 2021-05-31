import { gql } from "apollo-server";

export default gql`
  type unFollowUserResult {
    ok: String!
    error: String
  }
  type Mutation {
    unFollowUser(username: String!): unFollowUserResult!
  }
`;
