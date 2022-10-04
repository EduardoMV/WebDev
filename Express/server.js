const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true }));

//req = input
// res = output


app.get("/",(req, res) =>{
    res.sendFile(__dirname + "/public/html/index.html");
});
app.get("/students", (req, res) => {
    var name = req.query.name;
    res.send("Hello Student " + name);
});
app.post("/students", (req, res) => {
    var name = req.body.name;
    res.send("Hello secure " + name);
});
app.get("/teachers", (req, res) => {
    var name = req.query.name;
    res.send("Hello " + name);
});

app.listen(3000, (err) => {
    console.log("Listening on port 3000");
});