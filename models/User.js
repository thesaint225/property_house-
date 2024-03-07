import { Schema, model, models } from "mongoose";
const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exist "],
      required: [true, "Email is require "],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "property",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
