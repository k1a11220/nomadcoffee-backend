import { createWriteStream } from "fs";
import bcrypt from "bcrypt";
import client from "../../client";
import { protectedResolver } from "../users.utils";

const resolverFn = async (
  _,
  {
    username,
    email,
    name,
    location,
    avatarURL,
    githubUsername,
    password: newPassword,
    bio,
  },
  { loggedInUser }
) => {
  let avatarLink = null;
  if (avatarURL) {
    const { filename, createReadStream } = await avatarURL;
    const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}`;
    const readStream = createReadStream();
    const writeStream = createWriteStream(
      process.cwd() + "/uploads/" + newFilename
    );
    readStream.pipe(writeStream);
    avatarLink = `http://localhost:4000/static/${newFilename}`;
  }
  let uglyPassword = null;
  if (newPassword) {
    uglyPassword = await bcrypt.hash(newPassword, 10);
  }
  const updatedUser = await client.user.update({
    where: {
      id: loggedInUser.id,
    },
    data: {
      username,
      email,
      name,
      location,
      githubUsername,
      password: newPassword,
      bio,
      ...(uglyPassword && { password: uglyPassword }),
      ...(avatarLink && { avatarURL: avatarLink }),
    },
  });
  if (updatedUser.id) {
    return {
      ok: true,
    };
  } else {
    return {
      ok: false,
      error: "Could not update profile.",
    };
  }
};
export default {
  Mutation: {
    editProfile: protectedResolver(resolverFn),
  },
};
