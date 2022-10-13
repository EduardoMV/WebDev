const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static("public"));

app.get("/",(req, res) =>{
    res.sendFile(__dirname + "/public/html/signup.html");
    // res.render("home");
});

app.listen(3000, (err) => {
    console.log("Listening on port 3000");
});