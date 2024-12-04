import mongoose from "mongoose";

let initialized = false;

export default async function connect() {
  mongoose.set("strict", true);
  if (initialized) {
    console.log("DB connection already connected.");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "blog-app-next",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("DB connection successful.");
    initialized = true;
  } catch (error) {
    console.log("Error connecting to database " + error.message);
  }
}
