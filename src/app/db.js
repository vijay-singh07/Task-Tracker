// db.js

import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connection is established');
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
