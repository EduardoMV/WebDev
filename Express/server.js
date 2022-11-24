const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine('ejs', require("ejs").renderFile);
app.set("view engine", "ejs");
const https = require("https");

//req = input
// res = output

const welcomeMsg = "Welcome to my blog. ";

let posts = [];
const longContent =
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/public/html/index.html");
    posts.push({
        title: "My entry blog",
        content: longContent,
    });
    res.render("home", { startingContent: welcomeMsg, posts: posts });
});

app.get("/posts/:blogTitle", (req, res) => {

    res.render("post", { post: posts[0] });
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
const weatherKey = "69714dba4b57f2b2fa3e5c50900f58e2"
app.get("/weather", (req,res) =>{
    var link= "https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=" + weatherKey;
    https.get(link, (response) => {
        response.on("data", (data) => {
            var jsonData = JSON.parse(data);

            //HTML
            res.write("Welcome to " + jsonData.name);
            res.write("\nTemp: " + jsonData["main"]["temp"]);
            res.write("\n Humidity: " + jsonData["main"]["humidity"]);

            //CONSOLE
            console.log("Welcome to " + jsonData["name"]);
            console.log("Temperature " + jsonData["main"]["temp"]);
            console.log("Humidity " + jsonData["main"]["humidity"]);
            res.send();
            // console.log(jsonData);
        })
        .on("error", (e) =>{
            console.log("Error ${e.message}")
            res.send("Error ${e.message}")
        });
});
    // res.send("Data logged in console");
});

app.listen(3000, (err) => {
    console.log("Listening on port 3000");
});