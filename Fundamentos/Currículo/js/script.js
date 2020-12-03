var title = document.querySelector('h1');
console.log(title);
title.textContent= 'Modificado via script';

// id
var city = document.querySelector('#city');
console.log(city);
city.textContent = 'Toronto - Canadá';

// class
var personalDataArray = document.querySelectorAll('.personal-data');
console.log(personalDataArray);
// salvar como vetor
personalDataArray = Array.from(personalDataArray);
console.log(personalDataArray);