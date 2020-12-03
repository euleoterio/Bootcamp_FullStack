window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
  doSpread();
  doRest();
  doDestructuring();
});

function doMap() {
  const nameEmailArray = people.results.map(person => {
    return {
      name: person.name,
      email: person.email
    };
  });

  console.log(nameEmailArray);

  return nameEmailArray;
}

function doFilter() {
  const olderThan50 = people.results.filter(person => {
    return person.dob.age > 50;
  });

  console.log(olderThan50);
}

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach(person => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);

  // let sumAges = 0;

  // for (let i = 0; i < people.results.length; i++) {
  //   var current = people.results[i];
  //   sumAges += current.dob.age;
  // }

  // console.log(sumAges);
}

function doFind() {
  const found = people.results.find(person => {
    return person.location.state === 'Minas Gerais';
  });

  console.log(found);
}

function doSome() {
  const found = people.results.some(person => {
    return person.location.state === 'Amazonas';
  });

  console.log(found);
}

function doEvery() {
  const every = people.results.every(person => {
    return person.nat === 'BR';
  });

  console.log(every);
}

function doSort() {
  const mappedNames = people.results
    .map(person => {
      return {
        name: person.name.first
      };
    })
    .filter(person => person.name.startsWith('A'))
    .sort((a, b) => {
      return b.name.length - a.name.length;
      // return a.name.localeCompare(b.name);
    });

  console.log(mappedNames);
}

// espalha
function doSpread() {
  const marriedMen = people.results.filter(person => person.name.title === 'Mr');
  const marriedWomen = people.results.filter(person => person.name.title === 'Ms');

  const marriedPeople = [...marriedMen, ...marriedWomen, {msg: 'Oi'}];

  console.log(marriedPeople);

}

// agrupa
function doRest() {
  console.log(infiniteSum(1,2));
  console.log(infiniteSum(1,2,1000));
  console.log(infiniteSum(1,2,3,4,5,1000,222));
  
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0); 
}

function doDestructuring() {
  const first = people.results[0];

  // Repetitivo
  // const username = first.login.username;
  // const password = first.login.password;

  // Com destructuring
  const { username, password } = first.login;

  console.log(username);
  console.log(password);
}