function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const name = 'Test exports';

// exportanto TODAS dentro do array functions
// module.exports = { soma, sub, name };
export default { soma, sub, name };
