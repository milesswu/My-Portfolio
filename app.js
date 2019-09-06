const express = require("express");
const path = require("path");

const PORT = 8000;

const app = express();
app.use(express.static("public"));

//SERVE PAGE FILES ON GET REQUEST
app.get("/", function(req, res) {
	res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

//LISTEN FOR REQUESTS
app.listen(PORT, function() {
	console.log("Server running on localhost:" + PORT);
});
