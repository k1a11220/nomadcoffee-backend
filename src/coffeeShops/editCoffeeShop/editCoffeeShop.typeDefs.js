import { gql } from "apollo-server-core";

export default gql`
  type editCoffeeShopResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editCoffeeShop(
      name: String
      photos: [Upload]
      lat: String
      lon: String
      categories: [String]
    ): editCoffeeShopResult!
  }
`;
