import { gql } from "apollo-server-core";

export default gql`
  type editProfileResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editProfile(
      username: String
      email: String
      name: String
      location: String
      avatarURL: String
      githubUsername: String
      password: String
    ): editProfileResult!
  }
`;
