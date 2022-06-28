let express = require("express");

let app = express();

app.use("/new", express.urlencoded());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/new", (req, res) => {
    res.sendFile(__dirname + "/new.html");
})

app.post("/new", (req, res) => {
    res.json(req.body);
})

app.get("/users/:username", (req, res) => {
    var username = req.params.username;
    res.send(username);
})


app.listen(5555, () => {
    console.log("listening on 5555 port");
})