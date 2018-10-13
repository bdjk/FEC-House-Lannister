const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');

const { asyncFunc } = require('../database/index.js');
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
  // console.log('inside get')
  asyncFunc().collection('sephoras').find({ product_id: 1 }).toArray((err, docs) => {
    if (err) throw err;
    res.status(200).send(docs);
  })
});

app.put('/review', (req, res) => {
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
  asyncFunc().collection('sephoras').findOneAndUpdate({ name: req.params.name }, newUser, (err, docs) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(docs);
  })
});

app.delete('/review', (req, res) => {
  asyncFunc().collection('sephoras').deleteOne({ name: req.params.name }, (err, docs) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(docs);
  })
})

// **********************************************

app.get('/specific', (req, res) => {
  var column = req.query.spec1;
  var filter = req.query.spec2;
  asyncFunc().collection('sephoras').find({ $and: [{ product_id: 1 }, { [column]: filter }] }).toArray((err, docs) => {
    if (err) throw err;
    res.status(200).send(docs);
  })
})

app.post('/helpful', (req, res) => {
  asyncFunc().collection('sephoras').findOneAndUpdate({ name: req.params.name }, {
    $set: {
      helpful: req.body.helpfulCount
    }
  }, (err, docs) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(docs);
  })
})

