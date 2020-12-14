import { promises as fs } from 'fs';

init();
writeReadJson();

// Utilizando promisse com async await
async function init() {
  try {
    await fs.writeFile('test.txt', 'Usando promises');
    await fs.appendFile('test.txt', '\nappend text');
    const data = await fs.readFile('test.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// .Json
async function writeReadJson() {
  const arrayCarros = ['Gol', 'Palio', 'Uno'];
  const obj = { carros: arrayCarros };

  try {
    await fs.writeFile('test.json', JSON.stringify(obj));
    const data = JSON.parse(await fs.readFile('test.json'));
    console.log(data);

    data.carros.push('Sandero');
    console.log(data);

    // sobrescrever arquivo
    await fs.writeFile('test.json', JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}

// Promisse dentro de promisse (não indicado)
// fs.writeFile('test.txt', 'Usando promises')
//   .then(() => {
//     fs.appendFile('test.txt', '\nappend text')
//       .then(() => {
//         fs.readFile('test.txt', 'utf-8')
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Utilizando callbacks
// import fs from 'fs';

// fs.writeFile('test.txt', 'Hello World', (err) => {
//   if (err) {
//     // se ocorreu erro
//     console.log(err);
//   } else {
//     // escrita fim do arquivo
//     fs.appendFile('test.txt', '\n\n- Teste append file', (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         // leitura arquivo
//         fs.readFile('test.txt', 'utf-8', (err, data) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });
