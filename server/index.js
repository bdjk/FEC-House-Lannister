const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors')

const db = require('../database/index.js');
const PORT = 4000;

const app = express();

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}));

app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, () => {
  console.log('App is listening on PORT:', PORT);
});

app.get('/review', (req, res) => {
  console.log('whaaaaat?')
  db.find({}, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.get('/specific', (req, res) => {
  console.log('getting specific users', req.query)
  db.find({
    [req.query.spec1]: req.query.spec2
  }, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.post('/helpful', (req, res) => {
  //console.log('IN POST...', req.body.name)
  db.updateOne({
    name: req.body.name
  }, {
    helpful: req.body.helpfulCount
  }).then((data) => {
    //console.log(data)
    res.send('updated!')
  })
})