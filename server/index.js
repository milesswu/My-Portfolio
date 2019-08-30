const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8000;
var path = require("path");

const app = express();
// app.use(bodyParser.json());
app.use(cors());
app.use("/", function(req, res) {
	console.log(req.url);
	next();
});
//HANDLE GET REQUEST
app.get("/", function(req, res) {
	// res.send("hello from server");
	res.sendFile(
		path.join(path.resolve("../src"), path.resolve("../src/index.html"))
	);
});

app.get("/test", function(req, res) {
	res.sendFile(path.resolve("test.html"));
});

//LISTEN FOR REQUESTS
app.listen(PORT, function() {
	console.log("Server running on localhost:" + PORT);
});
