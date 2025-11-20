import mongoose, { Schema } from "mongoose";

type User = {
  name: string;
  age: number;
};

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});


export const User =
  mongoose.models.User || mongoose.model<User>("User", UserSchema);
