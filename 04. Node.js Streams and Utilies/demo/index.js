const events = require('events')

const publisher = new events.EventEmitter();

publisher.on('ping', firstHandler);
publisher.on('ping', secondHandler);

function firstHandler(msg) {
    console.log('First log:', msg);
}

function secondHandler(msg) {
    console.log('Second log:', msg.length);
}

publisher.emit('ping', 'Hello World!');
publisher.emit('ping', 'Hello World!');