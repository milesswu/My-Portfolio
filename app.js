const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");
// const cors = require("cors");

const PORT = 8000;

const app = express();
app.use(express.static("public"));
// app.use(bodyParser.json());
// app.use(cors());

app.use("/", function(req, res, next) {
	console.log(req.url);
	next();
});
//HANDLE GET REQUEST
app.get("/", function(req, res) {
	// res.send("hello from server");
	res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

//HANDLE POST REQUEST
app.post("/enroll", function(req, res) {
	console.log(req.body);
	res.status(200).send({ message: "Data received" });
	res.status(401).send({ message: "Unauthorized request" });
});

//LISTEN FOR REQUESTS
app.listen(PORT, function() {
	console.log("Server running on localhost:" + PORT);
});
