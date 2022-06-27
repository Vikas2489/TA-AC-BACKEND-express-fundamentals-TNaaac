let express = require("express");

let app = express();


// - add listener on port 4000
// - create a custom app level middleware which consoles request `url` and `method` and passes executio to next middleware in line.

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.get("/", (req, res) => {
    res.send("Welcome Goku to the express server");
})

app.listen(4000, () => {
    console.log("Listening on 4k port");
})