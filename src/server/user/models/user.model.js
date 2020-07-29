import { Schema, model as Model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    userAccess: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const UserModel = Model('User',userSchema);
export default UserModel;

export async function findAllUsers(){
    return await UserModel.find().catch((err) => {
        throw err;
    });
}
