import mongoose from 'mongoose';

export const connectDB = async() => {
    try {
        const uri = process.env.MONGO_URL;
        if(!uri) throw new Error("MONGO_URL is not defined");
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error("MOngoDb connection error: ", err.message);
        process.exit(1);
    }
};