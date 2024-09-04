const express = require("express");
const app = express();
var cors = require('cors')
const connectToDatabase = require("./dbConnect");
const port = process.env.PORT || 5000;
connectToDatabase();
app.use(cors());
// app.use(cors({
//     origin: ['http://localhost:3000', 'https://form-7w5g-sakshammanavs-projects.vercel.app'], // Allow requests from this origin
//     methods: [ 'POST', ], // Allow these HTTP methods
//     credentials:true,
//     // allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
//   }));
app.get("/", (req,res)=>{
    res.send("Hello");
})
app.use(express.json());
app.use("/form", require("./routes/Useraccess"));
app.listen(port, ()=>{
    console.log("app is listening at port 5000");
})


// const express = require("express");
// const app = express();
// const port = process.env.PORT || 5000;
// const mongoose = require("mongoose");
// const uri = "mongodb+srv://sakshammanav:saksham0625@cluster0.h0pto.mongodb.net/new";
// mongoose.connect(uri);
// if(mongoose.connect){
//     console.log("connected successfully");
// }
// app.use(express.json());
// app.get("/", (req,res)=>{
//     res.send("Hello");
// })

// app.use("/form", require("./routes/Useraccess"));
// app.listen(port, ()=>{
//     console.log("app is listening at port 5000");
// })