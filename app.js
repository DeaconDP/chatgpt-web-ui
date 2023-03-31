// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("dist"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));


// stream
const http = require('http');
app.use('/', express.static(__dirname));
const server = http.createServer(app);
server.listen(3000, () => console.log('Server started on port localhost:3000'));
