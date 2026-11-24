const os = require('os');
const path = require('path');
const fs = require('fs');

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime());

console.log(os.cpus().length);

const filePath = path.join(__dirname, 'assets', 'poem.txt');
console.log(filePath);

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));

console.log(path.join('assets', '..', 'server.js'));
console.log(path.resolve('assets', '..', 'server.js'));

console.log(path.parse(filePath));

console.log(process.version);
console.log(process.platform);
console.log(process.env.NODE_ENV);

console.log(process.argv);

process.stdout.write('Hello from stdout\n');
process.stderr.write('Hello from stderr\n');

const readable = fs.createReadStream("assets/poem.txt", { encoding: "utf8" });

readable.on("data", (chunk) => {
  console.log(chunk);
});

readable.on("end", () => {
  console.log("Done reading");
});

const readablePipe = fs.createReadStream("assets/poem.txt");
const writable = fs.createWriteStream("assets/stream-output.txt");
readablePipe.pipe(writable);