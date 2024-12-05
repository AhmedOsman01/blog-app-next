import mongoose from "mongoose";

let initialized = false;


export const connect = async () => {
    mongoose.set('strictQuery', true);
    if (initialized) {
        console.log('Already connected to mongoDB.');
        return;
    } 
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'blog-app-next',
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        })
        console.log('Successfully connected to mongoDB.');
        initialized = true;
    } catch (error) {
        console.log('Error connecting to mongoDB', error);
        
    }
}