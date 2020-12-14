import ev from './events.js';

ev.on('testEvent', () => {
  console.log('Ouve aqui também');
});

ev.emit('testEvent', 'emitindo um evento');

// ev.on('testEvent', () => {
//   console.log('Não ouve aqui também');
// });
