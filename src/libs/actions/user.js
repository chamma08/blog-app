import User from "../models/User";
import { connect } from "../mongoDB/db";

export const CreateOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) => {
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePicture: image_url,
          email: email_addresses[0].email_address,
          username,
        },
      },
      { new: true, upsert: true }
    );
    return user;
  } catch (error) {
    console.log("Error in CreateOrUpdateUser:", error);
  }
};

export const DeleteUser = async (id) => {
  try {
    await connect();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log("Error in DeleteUser:", error);
  }
};
