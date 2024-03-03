import mongoose from "mongoose";

let connected = false;

const connectedDB = async () => {
  mongoose.set("strictQuery", true);

  //   if the database is already connected, don't connected
  // again
  if (connected) {
    console.log("MongoDB is already connected ...");
    return;
  }

  //   Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectedDB;
