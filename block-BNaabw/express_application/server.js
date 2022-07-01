let express = require("express");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

let app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// third party middlewares
app.use(logger("dev"));
app.use(cookieParser());

// routes


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/blog.html", (req, res) => {
    res.sendFile(__dirname + req.url);
})

app.get("/stylesheet/style.css", (req, res) => {
    res.sendFile(__dirname + "/public/" + req.url);
})


app.get("/users", (req, res) => {
    res.send("Welcome To User's Section");
})


//404 error handler
app.use((req, res, next) => {
    res.send("Page not found");
})

// error handler 500
app.use((err, req, res, next) => {
    res.send(err);
})

app.listen(4000, () => {
    console.log("started listening on 4k port");
})