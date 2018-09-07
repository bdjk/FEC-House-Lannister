var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sephora');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!')
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
  message: String
});

var Sephora = mongoose.model('Sephora', sephoraSchema);

let find = (callback) => {
  Todo.find({}, (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

module.exports = Sephora;