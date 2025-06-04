import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const conectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    console.log("Connected to DB", conectionInstance.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
