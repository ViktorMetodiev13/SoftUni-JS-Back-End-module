const fs = require('fs/promises');

demo();

async function demo() {
    const data = await fs.readFile('./package.json');
    console.log(data.toString());
}

console.log('hello world');