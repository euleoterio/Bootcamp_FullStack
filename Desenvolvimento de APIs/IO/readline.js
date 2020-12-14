import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pergunta();

function pergunta() {
  rl.question('Digite um número: ', (numero) => {
    console.log(numero);
    rl.close();
    // pergunta();
  });
}

multiplos();

function multiplos() {
  rl.question('Digite um número: ', (num) => {
    if (parseInt(num) === -1) rl.close();
    else {
      const mult = [];
      for (let i = 3; i < parseInt(num); i++) {
        if (i % 3 === 0 || i % 5 === 0) mult.push(i);
      }
      console.log(mult);
      multiplos();
    }
  });
}
