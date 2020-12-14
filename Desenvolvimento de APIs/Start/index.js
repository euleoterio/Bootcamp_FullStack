// npm init -- para dar criar package.json de um projeto
console.log('Hello World!');

const numero = 100;
const multiplos = [];

for (let i = 0; i < numero; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    multiplos.push(i);
  }
}

console.log(multiplos);

// passa o valor junto com o comando para rodar o nodejs
console.log(process.argv);
console.log(process.argv[2]);
const numProcessArgv = parseInt(process.argv[2]);

const multiplos2 = [];

for (let i = 0; i < numProcessArgv; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    multiplos2.push(i);
  }
}

console.log(multiplos2);
