var connect = require("connect");
var http = require("http");

var app = connect();

function doFirst (req, res, next) {
    console.log("Bacon");
    next();
}

function doSecond(req, res, next) {
    console.log("Tuna");
    next();
}

function profile(req, res, next) {
    console.log("User requested profile");
}

function forum(req, res, next) {
    console.log("User requested forum");
}


app.use("/", doFirst);
app.use("/", doSecond);

app.use("/profile", profile);
app.use("/forum", forum);

http.createServer(app).listen(3000);

console.log("Server is running...");