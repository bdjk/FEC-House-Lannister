const MongoClient = require('mongodb').MongoClient;


var Sephora

MongoClient.connect('mongodb://bhavik:admin@18.236.166.181/sephora', function (err, client) {
  if (err) throw err;
  console.log('Connected to the database...')
  Sephora = client.db('sephora');
  module.exports.Sephora = asyncFunc;
});

var asyncFunc = () => {
  return Sephora;
}

module.exports.asyncFunc = asyncFunc;


// var mongoose = require('mongoose');


// mongoose.connect('mongodb://bhavik:admin@18.236.166.181/sephora', { useNewUrlParser: true, autoIndex: false });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('we\'re connected!');
// });

// var sephoraSchema = new mongoose.Schema({
//   id: Number,
//   name: {
//     type: String,
//     unique: true
//   },
//   product_id: Number,
//   picture: String,
//   eyeColor: String,
//   hairColor: String,
//   skinTone: String,
//   skinType: String,
//   rating: Number,
//   message: String,
//   rank1: String,
//   rank2: String,
//   helpful: Number,
//   recommends: Boolean
// });

// var Sephora = mongoose.model('Sephora', sephoraSchema);
// module.exports = Sephora;

