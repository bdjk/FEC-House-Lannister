var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sephora', { useNewUrlParser: true, autoIndex: false });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('we\'re connected!');
});

var sephoraSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  picture: String,
  eyeColor: String,
  hairColor: String,
  skinTone: String,
  skinType: String,
  rating: Number,
  message: String,
  rank1: String,
  rank2: String,
  helpful: Number,
  recommends: Boolean
});

var Sephora = mongoose.model('Sephora', sephoraSchema);
module.exports = Sephora;

