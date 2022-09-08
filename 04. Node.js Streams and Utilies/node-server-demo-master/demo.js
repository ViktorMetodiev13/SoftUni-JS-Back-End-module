const fs = require('fs/promises');

demo();

async function demo() {
    const data = fs.readFile('package.json');
    console.log(data);
}

console.log('hello world');