let inputSearch = null,
  buttonSearch = null,
  panelUsers = null,
  panelStatistics = null,
  divSpinner = null,
  divInteraction = null,
  users = [];

const formatter = Intl.NumberFormat('pt-BR');

window.addEventListener('load', async () => {
  mapElements();

  fetchUsers();

  addEvents();
});

function mapElements() {
  inputSearch = document.querySelector('#inputSearch');
  buttonSearch = document.querySelector('#buttonSearch');
  panelUsers = document.querySelector('#panelUsers');
  panelStatistics = document.querySelector('#panelStatistics');
  divInteraction = document.querySelector('#divInteraction');
  divSpinner = document.querySelector('#divSpinner');

  // Testando se elementos foram corretamento mapeados
  // inputSearch.value = 'Olá';
  // buttonSearch.textContent = 'Button';
  // panelUsers.innerHTML = '<p>Olá</P>';
  // panelStatistics.innerHTML = '<p>Olá</P>';
}

async function fetchUsers() {
  const res = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );

  const json = await res.json();
  users = json.results
    .map(({ login, name, dob, gender, picture }) => {
      const fullName = `${name.first} ${name.last}`;

      return {
        id: login.uuid,
        name: fullName,
        nameLowerCase: fullName.toLowerCase(),
        age: dob.age,
        gender: gender,
        picture: picture.large,
      };
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  // users = json.results;
  // console.log(users);

  showInteraction();
}

function showInteraction() {
  divSpinner.classList.add('hidden');
  divInteraction.classList.remove('hidden');
}

function addEvents() {
  inputSearch.addEventListener('keyup', handleKeyUp);
}

function handleKeyUp(event) {
  // console.log(event.target.value);
  // console.log(event.key);
  const currenteKey = event.key;

  if (currenteKey !== 'Enter') return;

  const filterText = event.target.value;

  if (filterText.trim() !== '') filterUsers(filterText);
}

function filterUsers(filterText) {
  const filterTextLowerCase = filterText.toLowerCase();

  const filteredUsers = users.filter((user) => {
    return user.nameLowerCase.includes(filterTextLowerCase);
  });

  // console.log(filteredUsers);
  renderUsers(filteredUsers);
  renderStatistics(filteredUsers);
}

function renderUsers(users) {
  panelUsers.innerHTML = '';

  const h2 = document.createElement('h2');
  h2.textContent = `${users.length} usuário(s) encontrados`;

  const ul = document.createElement('ul');

  users.forEach((user) => {
    const li = document.createElement('li');
    li.classList.add('flex-row');
    li.classList.add('space-bottom');

    const img = `<img class='avatar' src="${user.picture}" alt="${user.name}"/>`;
    const userData = `<span>${user.name}, ${user.age} anos</span>`;

    li.innerHTML = `${img}${userData}`;

    ul.appendChild(li);
  });

  panelUsers.appendChild(h2);
  panelUsers.appendChild(ul);
}

function renderStatistics(users) {
  const countMale = users.filter((user) => user.gender === 'male').length;
  const countFemale = users.filter((user) => user.gender === 'female').length;

  const sumAges = users.reduce((accumulator, current) => {
    return accumulator + current.age;
  }, 0);

  const averageAges = sumAges / users.length || 0;

  panelStatistics.innerHTML = `
    <h2>Estatísticas</h2>

    <ul>
      <li>Sexo masculino: <strong>${countMale}</strong> </li>
      <li>Sexo feminino: <strong>${countFemale}</strong></li>
      <li>Soma das idades: <strong>${formatNumber(sumAges)}</strong></li>
      <li>Média das idades: <strong>${formatAverage(averageAges)}</strong></li>
    </ul>
  `;
}

function formatNumber(number) {
  return formatter.format(number);
}

function formatAverage(number) {
  return number.toFixed(2).replace('.', ',');
}
