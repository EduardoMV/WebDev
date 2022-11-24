const express = require("express");
const app = express();
const https = require("https");
const mongoose = require("mongoose");

app.use(express.urlencoded({extended: true }));
app.use(express.static("public"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname);

const mongoUrl = "mongodb://localhost:27017/testDB";

mongoose.connect('mongodb://localhost:27017/testDB', {useNewUrlParser: true, useUnifiedTopology: true});
const carSchema = new mongoose.Schema( { name: String, model: Number, comment: String } );


const carModel = mongoose.model("Car", carSchema);

app.get("/",(req, res) =>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/car",(req, res) =>{  
    var carInst = new carModel({
        name: "Yaris", 
        model: 2020, 
        comment: "Great milage"
    });
    carInst.save();

});

app.listen(3000, (err) => {
    console.log("Listening on port 3000");
});