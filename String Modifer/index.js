const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send(homepage);
});

app.get('/upper/:str', (req, res) => {
  let string = req.params.str;
  let obj = {};
  obj.oldStr = string;
  obj.result = string.toUpperCase();
  res.json(obj)
});

app.get('/lower/:str', (req, res) => {
  let string = req.params.str;
  let obj = {};
  obj.oldStr = string;
  obj.result = string.toLowerCase();
  res.json(obj)
});

app.get('/length/:str', (req, res) => {
  let string = req.params.str;
  let obj = {};
  obj.oldStr = string;
  obj.result = string.length;
  res.json(obj)
});

app.get('/reverse/:str', (req, res) => {
  let string = req.params.str;
  let obj = {};
  obj.oldStr = string;
  obj.result = string.split("").reverse().join("");;
  res.json(obj)
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});

const homepage = `
<html>
  <head>
    <title>String Modifier</title>
    <link href="app.css"
          type="text/css" rel="stylesheet">
    <link rel="icon" type="image/x-icon"
          href="favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Itim" rel="stylesheet">
    <script src="app.js"></script>
    </head>
  <body>
    <h1>String Modifier</h1>
    <input type="text" name="string"
           placeholder="type a string" id ='input'>
    <p id="modP"></p>
    <button id="upper">Upper</button>
    <button id="lower">Lower</button>
    <button id="length">Length</button>
    <button id="reverse">Reverse</button>
  </body>
</html>
`;
