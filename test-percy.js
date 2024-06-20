const fs = require('fs');
const snapshots = require('./snapshots');

snapshots().then(urls => {
  const numSnapshots = urls.reduce((acc, url) => acc + url.widths.length, 0);
  fs.writeFileSync('percy_urls_report.json', JSON.stringify({ numSnapshots, urls }, null, 4));
  console.log(`Exported ${numSnapshots} snapshots to percy_urls_report.json`);
})