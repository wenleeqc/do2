const { defaultMaxListeners } = require('events');
const { response } = require('express');
const express = require('express');
const fs = require('fs');
const { request } = require('http');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  //console.log(__dirname);
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/feedback', (req, res) => {
  res.render("feedback");
});

app.post('/testimonial', (req, res) => {
  //console.log(req);
  //req.body.name
  //req.body.comment
  //res.sendFile(path.join(__dirname, "public/feedback.html"));
  //console.log(req.body.name);
  //console.log(req.body.comment);

  //let quote = {req.body.name, req.body.comment};
  let quote = {
    name: req.body.name,
    comment: req.body.comment
  };

  console.log(quote);

  // fs.appendFile('public/data.txt', req.body.name+'\n', (e) => {console.log(e)});
  fs.appendFile('public/data.txt', JSON.stringify(quote)+'\n', (e) => {console.log(e)});

  //res.render("feedback");
});

// app.get('/ctp', (req, res) => {
//     res.send('ctp...ctp');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 