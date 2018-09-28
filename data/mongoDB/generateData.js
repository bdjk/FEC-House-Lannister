const faker = require('faker');
const now = require("performance-now");
const fs = require('fs');


var count = 0;

var stream = fs.createWriteStream("data.tsv");

stream.once('open', function (fd) {

  var start = now();

  console.log('Starting to generate entries at', start);

  for (var x = 0; x < 10000000; x++) {
    var entry = {
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

    stream.write(JSON.stringify(entry, null, 4) + "\t", (err) => {
      if (err) {
        console.error(err);
      }
    });
    count++;
    if (count % 1000000 === 0) {
      console.log(`Generated ${count} entries so far`);
    }

  }

  var end = now();

  console.log(`Success: Generating ${count} entries took ` + (end - start) / (1000 * 60) + ' minutes')

  stream.end();
});

