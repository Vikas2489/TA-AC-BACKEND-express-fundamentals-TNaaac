let express = require("express");
let logger = require("morgan");
let cookieParser = require("cookie-parser");

let app = express();

app.use(logger("dev"));

app.use(cookieParser());

app.use("/about", (req, res, next) => {
    res.cookie("username", "suraj");
    next();
})

app.use((req, res, next) => {
    console.log(req.cookies);
    next();
})

app.get('/about', (req, res) => {
    res.send("welcome to about");
})

app.listen(4444, () => {
    console.log("listening on 4444");
})