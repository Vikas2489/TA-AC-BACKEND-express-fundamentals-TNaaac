var express = require("express");

var app = express();

app.get("/", (req, res) => {
    res.send("Goku Mode ON");
})

app.listen(3000, () => {
    console.log("listening on 3k");
})