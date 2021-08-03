import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    createAccount: async (_, { username, email, name, location, password, avatarURL, githubUsername }) => {
      try {
        //check if username or email are already on DB.
        const existingUser = await client.user.findFirst({
          where: {
            OR: [{
              username
            }, {
              email
            }]
          }
        });
        if (existingUser) {
          throw new Error("This username/password is already taken");
        }
        const uglyPassword = await bcrypt.hash(password, 10);
        await client.user.create({
          data: {
            username,
            email,
            name,
            location,
            password: uglyPassword,
            avatarURL,
            githubUsername
          }
        });
        return {
          ok: true
        };
      } catch (e) {
        return {
          ok: false,
          error: "Cant't create account."
        };
      }
    }
  }
};