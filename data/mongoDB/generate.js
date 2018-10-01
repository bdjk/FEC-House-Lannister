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
    data = {
      name: faker.internet.userName() + faker.random.number(),
      picture: 'https://sephora.i.lithium.com/t5/image/serverpage/avatar-name/default-avatar/avatar-theme/sephora/avatar-collection/sephora/avatar-display-size/profile/version/2?xdesc=1.0',
      eyeColor: faker.random.arrayElement(["blue", "brown", "green", "gray", "hazel"]),
      hairColor: faker.random.arrayElement(["blonde", "brunette", "auburn", "black", "red", "gray"]),
      skinTone: faker.random.arrayElement(["porcelain", "fair", "light", "medium", "tan", "olive", "deep", "dark", "ebony"]),
      skinType: faker.random.arrayElement(["normal", "combination", "dry", "oily"]),
      rating: faker.random.number(5),
      message: faker.lorem.sentence(),
      rank1: 'https://community.sephora.com/html/rank_icons/birole_rouge.svg',
      rank2: 'https://community.sephora.com/html/rank_icons/rank_rookie-01.svg',
      helpful: faker.random.number(50),
      recommends: faker.random.boolean()
    };
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
