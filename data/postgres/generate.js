const faker = require('faker');
const now = require("performance-now");
const fs = require('fs');

var stream = fs.createWriteStream("data.tsv");
let limit = 10000000;
let i = 0;

var start = now();
console.log('Starting to generate entries at', start);

write();

function write() {
  let ok = true;
  do {
    i++;

    if (i % 1000000 === 0) {
      console.log(`Generated ${i} entries so far`);
    }
    if (i === limit - 1) {
      // last time!
      stream.write(JSON.stringify(data, null, 4), 'utf-8', () => {
        var end = now();
        console.log(`Success: Generating ${i} entries took ` + (end - start) / (1000 * 60) + ' minutes')
      });
    } else {
      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
      ok = stream.write(JSON.stringify(data, null, 4) + '\t', 'utf-8');
    }
  } while (i <= limit - 1 && ok);
  if (i <= limit - 1) {
    // had to stop early!
    // write some more once it drains
    stream.once('drain', write);
  }
}
