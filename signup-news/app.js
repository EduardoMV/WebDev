const express = require("express");
const app = express();
const https = require("https");

app.use(express.urlencoded({extended: true }));
app.use(express.static("public"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);


app.get("/",(req, res) =>{
    res.sendFile(__dirname + "/public/html/signup.html");
});

app.post("/", (req, res) => {

    console.log(req.body);
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    console.log("The name: " + fName);
    console.log("The last name: " + lName);
    console.log("The email is: " + email);

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName
                }
            }
        ]
    }
    var jsonData = JSON.stringify(data);
    const apiKey = "3c72dc630f97929e26ab7d694464b1f1-us21";
    const list_id = "cb18fa31f1";
    const url = "https://us21.api.mailchimp.com/3.0/lists/" + list_id;
        const options = {
            method: "POST",
            auth: "Eduardo MV:" + apiKey
        }
        const name = fName;
        var mailRequest = https.request(url, options, (response) => {
            if(response.statusCode === 200) {
                response.on("data", (data) => {
                    var jsonResp = JSON.parse(data);

                    if(jsonResp["error_count"] === 0) {
                        res.render(__dirname + "/public/html/success.html", {name:name});
                    } else {
                        res.render(__dirname + "/public/html/failure.html", {name:name});
                        console.log(JSON.stringify(jsonResp.errors[0]));
                        console.log(jsonResp.errors[0]["error_code"]);
                        console.log(jsonResp.errors[0]["error"]);
                    }
                }).on("error", (e) => {
                    res.render(__dirname + "/public/html/failure.html", {name:name});
                });
            } else {
                res.render(__dirname + "/public/html/failure.html", {name:name});
            }
        });
        mailRequest.write(jsonData);
        mailRequest.end();
});

app.get("/failure", (req, res) => {
    res.redirect("/");
});

app.get("/success", (req, res) => {
    res.redirect("/");
});

app.listen(3000, (err) => {
    console.log("Listening on port 3000");
});