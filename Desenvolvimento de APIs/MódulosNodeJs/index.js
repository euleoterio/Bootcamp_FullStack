// const op = require('./operacoes.js').default;
// const mult = require('./operacoes2.js').default;
import op from './operacoes.js';
import mult from './operacoes2.js';
import { div, resto } from './operacoesNomeadas.js';

console.log(op.soma(2, 3));
console.log(op.sub(5, 3));
console.log(op.name);
console.log(mult(2, 3));
console.log(div(10, 2));
console.log(resto(10, 2));
