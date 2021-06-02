import { gql } from "apollo-server-core";

export default gql`
  type createCoffeeShopResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createCoffeeShop(
      name: String!
      photos: [Upload]
      lat: String!
      lon: String!
      categories: [String]!
    ): createAccountResult!
  }
`;
