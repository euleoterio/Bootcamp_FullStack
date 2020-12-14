import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

// recebendo evento
eventEmitter.on('testEvent', (obj) => {
  console.log(obj);
});

eventEmitter.on('testEvent', (obj) => {
  console.log(obj + ' 2');
});

// emitindo evento
// eventEmitter.emit('testEvent', 'abc');

export default eventEmitter;
