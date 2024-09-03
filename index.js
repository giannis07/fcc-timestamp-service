// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// Timestamp API endpoint
app.get("/api/:date?", function (req, res) {
  let date = req.params.date;

  // If no date is provided, use the current date
  if (!date) {
    date = new Date();
  } else {
    // Check if the date is a valid Unix timestamp
    if (/^\d+$/.test(date)) {
      date = parseInt(date);
    }
    date = new Date(date);
  }

  // If  date is invalid, return message Invalid
  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  // Return the Unix timestamp and UTC date string
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });

}); 




// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
