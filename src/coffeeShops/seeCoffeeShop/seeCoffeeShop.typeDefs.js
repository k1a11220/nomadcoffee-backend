import { gql } from "apollo-server-core";

export default gql`
  type Query {
    seeCoffeeShop(name: String!): CoffeeShop
  }
`;
