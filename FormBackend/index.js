const express = require("express");
const app = express();
var cors = require('cors')
const connectToDatabase = require("./dbConnect");
const port = process.env.PORT || 5000;
connectToDatabase();
app.use(cors({
    origin: ['https://form-7w5g-sakshammanavs-projects.vercel.app', "https://form-7w5g.vercel.app" ], // Allow requests from this origin
    methods: [ 'POST', ], // Allow these HTTP methods
    credentials:true,
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
  }));
app.get("/", (req,res)=>{
    res.send("Hello");
})
app.use(express.json());
app.use("/form", require("./routes/Useraccess"));
app.listen(port, ()=>{
    console.log("app is listening at port 5000");
})
