// garante que toda page foi carregada
window.addEventListener('load', start);

function start() {
  console.log('Página totalmente carregada');

  // pega o nome digitado
  var nameInput = document.querySelector('#nameInput');
  nameInput.addEventListener('keyup', countName);

  // manda submit dos campos 
  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

// conta os caracteres do que foi escrito
function countName(event) {
  var count = event.target.value;

  var span = document.querySelector('#nameLength');
  span.textContent = count.length;
}

// usa preventDefault e dispara um Alert
function preventSubmit(event) {
  event.preventDefault();

  var nameInput = document.querySelector('#nameInput');
  alert(nameInput.value + ' cadastrado com sucesso!');
}
