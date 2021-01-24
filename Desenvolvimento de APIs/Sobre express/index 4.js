import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Get: Hello World!');
});

app.post('/', (req, res) => {
  const a = 3;
  const b = 5;
  const result = soma(a, b);
  // res.send('Post: Hello World!');
  res.send('Resultado: ' + result);
});

function soma(a, b) {
  return a + b;
}

app.listen(3000, () => {
  console.log('API Started!');
});
