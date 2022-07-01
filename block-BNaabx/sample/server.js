let express = require("express");
// let logger = require("morgan");


let app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
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