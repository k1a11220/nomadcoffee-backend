import client from "../../client";

export default {
  Mutation: {
    createCoffeeShop: async (_, name, photos, lat, lon, categories) => {
      client.coffeeShop.create({
        data: {
          name,
          photos,
          lat,
          lon,
          categories,
        },
      });
    },
  },
};
