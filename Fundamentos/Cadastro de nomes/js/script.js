// varivaeis globais
var globalNames = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco'];
var inputName = null;
var currentIndex = null;
var isEditing = false;

window.addEventListener('load', () =>{
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
  render();
});

// Refatorando código, como start só é chamado uma vez faz mais sentido colocar como arow function no addEventListener
// function start() {
//   inputName = document.querySelector('#inputName');

//   preventFormSubmit();
//   activateInput();
//   render();
// }

//pega o value do form 
function preventFormSubmit() {

  // garante que não de reload na page
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  // insere nome digitado
  function insertName(newName) {
    // refatorando -- push pelo spread
    // globalNames.push(newName);
    // recebe tudo o que tem em globalNames, + o newName
    globalNames = [...globalNames, newName];
  }

  function updateName(newName) {
    globalNames[currentIndex] = newName;
  }

  
  function handleTyping(event) {
    var hasText = !!event.target.value && event.target.value.trim() !== '';

    if (!hasText) {
      clearInput();
      return;
    }

    // verifica se a tecla apertada foi enter para salvar o nome
    if (event.key === 'Enter') {
      if (isEditing) {
        updateName(event.target.value);
      } else {
        insertName(event.target.value);
      }

      render();
      isEditing = false;
      clearInput();
    }
  }

  // captura o que foi digitado em inputName, assim que solta a tecla
  inputName.addEventListener('keyup', handleTyping);
  // ativa o input assim que a page carregar
  inputName.focus();
}

// 
function render() {
  function createDeleteButton(index) {
    function deleteName() {
      // refatorando - trocar splice pelo filter
      // globalNames.splice(index, 1);
      
      // gero um novo vetor, e retribuo ao globalNames
      // globalNames = globalNames.filter((name, i) =>{
      //   if(i === index)
      //     return false;
        
      //   return true;
      // });

      // substituindo o if
      // globalNames = globalNames.filter((name, i) => i !== index)
      // usando _ por não usar o name
      globalNames = globalNames.filter((_, i) => i !== index)

      render();
    }
    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'x';
    button.addEventListener('click', deleteName);
    return button;
  }

  function createSpan(name, index) {
    function editItem() {
      // pegando o valor que já tem na lista
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }

    var span = document.createElement('span');
    // possibilita a lista ser clicavel
    span.classList.add('clickable');
    span.textContent = name;
    span.addEventListener('click', editItem);

    return span;
  }

  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';

  // criar ul
  var ul = document.createElement('ul');

  //percorrer valor de nomes
  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var li = document.createElement('li');
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i);

    li.appendChild(button);
    li.appendChild(span);

    // vinculando li como filho de ul
    // inserindo li na ul
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
}

// limpa o input que já estava na tela, e volta o foco
// refatorando - trocando por arow function
// function clearInput() {
//   inputName.value = '';
//   inputName.focus();
// }

const clearInput = () =>{
  inputName.value = '';
  inputName.focus();
};
