const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const user = require('./response/user.js');
const timeline = require('./response/timeline.js');
const watchlist = require('./response/watchlist.js');

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/timeline", (req,   res) => {
    res.status(200);
    res.send(timeline);
});
app.post("/private/portfolio/virtual", (req,   res) => {
	//payload : {flag: true}
    res.status(200);
    res.send(user);
});
app.post("/private/portfolio/ws", (req,   res) => {
	//payload : {flag: true}
    res.status(200);
    res.send(user);
});
app.post("/private/portfolio/qty", (req,   res) => {
	//payload : {flag: true}
    res.status(200);
    res.send(user);
});
app.post("/private/portfolio/point", (req,   res) => {
	//payload : {flag: true}
    res.status(200);
    res.send(user);
});

app.get("/private/global/watchlist", (req,   res) => {
	//payload : {flag: true}
    res.status(200);
    res.send(watchlist);
});


app.post("/adduser", (req,   res) => {
    res.status(200);
    res.send(user);
});
app.put("/updateuser", (req,   res) => {
    res.status(200);
    res.send(user);
});
app.patch("/deleteuser", (req,   res) => {
    res.status(200);
    res.send(user);
});
server.listen(process.env.PORT || 5000, () => {
  console.log("Listening to port http://localhost:5000");
});