
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const countHandler = (count) => console.log(count)


eventEmitter.on('count', countHandler) // add handler(listener) to event
eventEmitter.on('count', (count) => console.log(`Count = ${count}`))

eventEmitter.emit('count', 1)

eventEmitter.removeListener('count', countHandler)

eventEmitter.emit('count', 10)
eventEmitter.emit('close')

