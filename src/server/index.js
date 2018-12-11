const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path")
require("dotenv").config();

const pubgController = require('./controllers/PUBGController.js')

const PORT = process.env.PORT;


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static("dist"));

app.post('/lifetimeStats', async (req, res, next) => {
  const username = req.body.data.username;
  const platform = req.body.data.platform;
  const region = req.body.data.region;

  res.send( await pubgController.getLifetimeStats(username, platform));
});


app.listen( PORT, () => { 
  console.log(`\n Sup Boyo, we online and dangerous at port ${PORT} \n`)
});