const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine('ejs', require("ejs").renderFile);
app.set("view engine", "ejs");

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

app.listen(3000, (err) => {
    console.log("Listening on port 3000");
});