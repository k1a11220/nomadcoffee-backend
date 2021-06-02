import client from "../../client";

export default {
  Query: {
    seeCoffeeShop: (_, { name }) =>
      client.user.findUnique({
        where: {
          name,
        },
      }),
  },
};
