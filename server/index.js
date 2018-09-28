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

// Extending review functionality to include CRUD 
// **********************************************
app.post('/review', (req, res) => {
  console.log('inside post')

  var newUser = {
    "name": req.body.name,
    "picture": req.body.picture,
    "eyeColor": req.body.eyeColor,
    "hairColor": req.body.hairColor,
    "skinTone": req.body.skinTone,
    "skinType": req.body.skinType,
    "rating": req.body.rating,
    "message": req.body.message,
    "rank1": req.body.rank1,
    "rank2": req.body.rank2,
    "helpful": req.body.helpful,
    "recommends": req.body.recommends
  }

  db.create(newUser, function (err, small) {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(data)
    }
  });
});

app.get('/review', (req, res) => {
  console.log('inside get')
  db.find({})
    .limit(5)
    .exec((err, data) => {
      if (err) {
        res.status(404).send(err)
      } else {
        res.status(200).send(data)
      }
    })
});

app.put('/review', (req, res) => {
  console.log('inside put')
  var newUser = {
    "name": req.body.name,
    "picture": req.body.picture,
    "eyeColor": req.body.eyeColor,
    "hairColor": req.body.hairColor,
    "skinTone": req.body.skinTone,
    "skinType": req.body.skinType,
    "rating": req.body.rating,
    "message": req.body.message,
    "rank1": req.body.rank1,
    "rank2": req.body.rank2,
    "helpful": req.body.helpful,
    "recommends": req.body.recommends
  }
  db.findOneAndUpdate({ 'name': req.body.name }, newUser, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(data)
    }
  })
});

app.delete('/review', (req, res) => {
  console.log('inside delete')
  db.findOneAndDelete({ 'name': req.body.name }, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

// **********************************************

app.get('/specific', (req, res) => {
  // console.log('getting specific users', req.query)
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