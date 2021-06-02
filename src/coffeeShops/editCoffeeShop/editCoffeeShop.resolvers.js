import client from "../../client";

export default {
  Mutation: {
    editCoffeeShop: async (_, name, photos, lat, lon, categories) => {
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
