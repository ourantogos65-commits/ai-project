import connectDB from "@/utils/mongoose";
import { User } from "@/utils/model/User.schema";

export async function GET() {
  await connectDB();
  const users = await User.find();
  return Response.json(users);
}


export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const newUser = await User.create(data);
  return Response.json(newUser);
}
