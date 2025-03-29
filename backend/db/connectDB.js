// import mongoose from "mongoose";

// const connectDB = async () => {
// 	try {
// 		const conn = await mongoose.connect(process.env.MONGO_URI, {
// 			// To avoid warnings in the console
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 		});

// 		console.log(`MongoDB Connected: ${conn.connection.host}`);
// 	} catch (error) {
// 		console.error(`Error: ${error.message}`);
// 		process.exit(1);
// 	}
// };

// export default connectDB;


import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    // Ensure the MONGO_URI environment variable is set
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined in the environment variables');
    }

    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
