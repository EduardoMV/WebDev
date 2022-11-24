const express = require("express");
const app = express();
const https = require("https");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

const userDB = [{
    userName: "admin",
    password: "admin123",
    name: "Web master",
    lname: "@ UP GDL",
    id: 1,
    profile: {
        accessDB: true,
        accessFE: true,
        modifyProfiles: true,
    },
    picture: "https://picsum.photos/200",
}, {
    userName: "GC",
    password: "Gcastillo",
    name: "Gabriel",
    lname: "Castillo",
    id: 2,
    profile: {
        accessDB: true,
        accessFE: false,
        modifyProfiles: true,
    },
    savedPurchases: [{
        hotel: "Sheraton",
        dateArrived: "15/05/22",
        dateLeaved: "02/09/22",
    }],
    picture: "https://picsum.photos/200",
}];

app.post("/Login", (req, res) => {
    const p_userName = req.body.user;
    const p_password = req.body.pass;
    console.log(p_userName + '/' + p_password);
    var user = userDB.find((user) => {
        return user.userName === p_userName;
    });
    console.log(user);
    if (typeof user !== 'undefined') {
        if (user.password === p_password) {
            res.json(user); //Succes
        } else {
            res.json({ error: 'Unauthorized access', message: "Wrong user + password combination" });
        }
    } else {
        res.json({ error: "Unknown user", message: "User is unknown" });
    }
});

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});
