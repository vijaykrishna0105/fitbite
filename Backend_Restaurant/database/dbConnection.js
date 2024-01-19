import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT"
    }).then(() => {
        console.log("Connected to database successfully!");
    }).catch((err) => { // Include the error parameter here
        console.log(`An error occurred while connecting to the database: ${err}`);
    });
};


