let express = require("express");

let app = express();


app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    console.log(req.url);
    if (req.path === "/admin") {
        next("Unauthorized Section");
    } else {
        next();
    }
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
    res.send("Welcome To About Page");
})

// Error 404
app.use((req, res) => {
    res.send("Page Not Found 404");
})

// Custom Error Handler
app.use((err, req, res, next) => {
    res.send(err);
});

app.listen(1234, () => {
    console.log("listening on 1234 port");
})