const crypto = require('crypto');
const fs = require('fs');

const data = fs.readFileSync('./file.svg');
console.log(data.toString('base64'));

for (const algorithm of ['md5', 'sha1', 'sha256']) {
  for (const encoding of ['hex', 'base64']) {
    // See https://ilikekillnerds.com/2020/04/how-to-get-the-hash-of-a-file-in-node-js/
    const hash = crypto.createHash(algorithm);
    hash.update(data);
    const digest = hash.digest(encoding);
    console.log('---');
    console.log(algorithm, encoding, digest);
  }
}
