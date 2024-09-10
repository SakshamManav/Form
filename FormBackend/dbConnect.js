const mongoose = require('mongoose');
const uri = "mongodb+srv://sakshammanav:saksham0625@cluster0.h0pto.mongodb.net/new2?retryWrites=true&w=majority&ssl=true";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectMongoose() {
    try {
      await mongoose.connect(uri, clientOptions);
      await mongoose.connection.db.admin().command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
      console.error("Connection failed:", error.message, error.stack);
    } finally {
      // Optionally disconnect if you don't need to keep the connection open
      // await mongoose.disconnect();
    }
  }
  
connectMongoose().catch(console.dir);


module.exports = connectMongoose;
