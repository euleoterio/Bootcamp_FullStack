console.log('Olá, mundo');

// testando conexão do js com html
// var title = document.querySelector('h1');
// title.textContent = 'Modificado por Vinicius Euleoterio'

var a = 5;
var b = 6;

if (a > b)
  console.log(a + ' é maior que ' + b);
else if(a<b)
  console.log(a + ' é menor que ' + b);
else 
  console.log(a + ' é igual a ' + b);


var dia = 1;
var r = '';

switch (dia) {
  case 1: r ='Domingo'; break;
  case 2: r ='Segunda'; break;
  case 3: r ='Terça'; break;
  case 4: r ='Quarta';  break;
  case 5: r ='Quinta'; break;
  case 6: r ='Sexta'; break;
  case 7: r ='Sábado';  break;

  default: r ='Dia inválido'; break;
}

console.log(r);


a = 6;
b = 7;

// operador ternário
var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resposta);


// While
var numeroAtual = 1;
var somatorio = 0

while(numeroAtual <= 10){
  somatorio += numeroAtual;
  numeroAtual++;
}

console.log('A soma é ' + somatorio)


// Do While
numeroAtual = 1;
somatorio = 0

do{
  somatorio += numeroAtual;
  numeroAtual++;
}while(numeroAtual <= 10);

console.log('A soma é ' + somatorio)


// For
somatorio = 0

for(var i = 0; i <=10; i++){
  somatorio += i;
}

console.log('A soma é ' + somatorio)

