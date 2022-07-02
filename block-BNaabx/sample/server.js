let express = require("express");
// let logger = require("morgan");



let app = express();

app.use((req, res, next) => {
    let date = new Date();
    console.log(req.url, req.method, date.toLocaleTimeString());
    next();
})

app.use((req, res, next) => {

})

// routes
app.get("/", (req, res) => {
    res.send("welcome to index route");
})

app.listen(5000, () => {
    console.log("listening on 5000");
})