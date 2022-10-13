const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static("public"));
app.engine('ejs', require("ejs").renderFile);
app.set("view engine", "ejs");

//req = input
// res = output


app.get("/",(req, res) =>{
    // res.sendFile(__dirname + "/public/html/index.html");
    res.render("home");
});
app.get("/students", (req, res) => {
    var name = req.query.name;
    //res.send("Hello Student " + name);
    res.render("test", { name: name });
});
app.post("/students", (req, res) => {
    var name = req.body.name;
    res.send("Hello secure " + name);
});
app.get("/teachers/:name", (req, res) => {
    res.send("Hello Prof. " + req.params.name);
});

app.listen(3000, (err) => {
    console.log("Listening on port 3000");
});