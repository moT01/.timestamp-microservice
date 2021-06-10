var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
// Do not change code above this line





// Do not change code below this line
var listener = app.listen('8080', function () {
  let url = 'http://localhost:8080/';

  const codeAllyPort = process.env.CODEALLY_PORT_8080;
  if (codeAllyPort) url = codeAllyPort.replace('silisky.com', 'codeally.io');

  console.log('Your app is listening on port ' + listener.address().port);
  console.log(`Navigate to ${url} in your browser to view your web page`);
});
