var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sephora');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!')
});

var sephoraSchema = new mongoose.Schema({
  item: String
});

var Sephora = mongoose.model('Todo', sephoraSchema);