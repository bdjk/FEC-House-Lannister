const exec = require('child_process').exec
const now = require("performance-now");


var child = exec('mongoimport --db sephora --collection sephoras --file data.tsv');
var start = now();

child.stdout.on('data', function (data) {
  console.log(data);
});
child.stderr.on('data', function (data) {
  console.log(data);
});
child.on('close', function (code) {
  // console.log('closing code: ' + code);
  var end = now();
  console.log(`Success: Inserting entries took ` + (end - start) / (1000 * 60) + ' minutes')
});