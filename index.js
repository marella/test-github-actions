const crypto = require('crypto');
const fs = require('fs');

for (const file of ['file.svg', 'raw.svg']) {
  const data = fs.readFileSync(file);
  console.log(data.toString('base64'));
  console.log('---');

  for (const algorithm of ['md5', 'sha1', 'sha256']) {
    for (const encoding of ['hex', 'base64']) {
      // See https://ilikekillnerds.com/2020/04/how-to-get-the-hash-of-a-file-in-node-js/
      const hash = crypto.createHash(algorithm);
      hash.update(data);
      const digest = hash.digest(encoding);
      console.log(algorithm, encoding, digest);
      console.log('---');
    }
  }
}
