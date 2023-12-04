import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    console.log("MONGODB_URI must be defined");
  }
  if (isConnected) {
    return console.log("=> using existing database connection");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "medflow",
    });
    isConnected = true;
    console.log("=> using new database connection");
  } catch (error) {
    console.log("=> error connecting to database:", error);
  }
};
