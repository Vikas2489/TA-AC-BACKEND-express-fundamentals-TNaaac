let express = require("express");
let logger = require("morgan");
let cookieParser = require("cookie-parser");
let app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    var count = req.cookies.count;
    if (count) {
        res.cookie("count", Number(count) + 1);
        next();
    } else {
        res.cookie("count", 1);
        next();
    }
})

app.get("/users/:username", (req, res) => {
    var username = req.params.username;
    res.send(`<h1>${username}</h1>`);
})

app.post("/form", (req, res) => {
    res.json(req.body);
})

app.post("/json", (req, res) => {
    res.send(req.body);
})

app.get("/", (req, res) => {
    res.send('<h2>Welcome to express</h2>');
})

app.get("/about", (req, res) => {
    res.send('My name is qwerty');
});

app.use("/admin", (req, res, next) => {
    next("Unauthorized section");
})


app.use((req, res) => {
    res.status(404).send('Page not found');
})

app.use((err, req, res, next) => {
    res.status(500).send(err);
})

app.listen(3000, () => {
    console.log("listening on 3000 port");
});