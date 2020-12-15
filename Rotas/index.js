import express from 'express';

const app = express();
// informa que o body será usado com JSON
app.use(express.json());

app.all('/testAll', (req, res) => {
  res.send(req.method);
});

// '?' possibilita entender com "/test" e "/teste"
// '_' no lugar do req para não ficar dando alerta que não esta sendo usado
app.get('/teste?', (_, res) => {
  res.send('/teste?');
});

// '+' possibilita entender com quantos 'z' (último caracter) quiser, exemplo: buzzzzzz
app.get('/buzz+', (_, res) => {
  res.send('/buzz+');
});

// '*' possibilita que exista qualquer coisa no lugar do caracter, exemplo: oneCarBlue
app.get('/one*Blue', (req, res) => {
  // res.send('/one*Blue');
  res.send(req.path);
});

// '()' são os caracteres que sofrem a ação do caracter (?,+,*) seguinte
app.post('/test(ing)?', (req, res) => {
  console.log(req.body);
  res.send('/test(ing)?');
});

// endpoint com Expressão Regular -- exemplo: 'carRed'
app.get(/.*Red$/, (req, res) => {
  res.send('Expressão Regular: ' + req.path);
});

// Parametros na rota - Usado com get
// com o '?' o parametro 'a' vira opcional
app.get('/testParam/:id/:a?', (req, res) => {
  res.send(req.params.id + ' ' + req.params.a);
});

// Parametros via query string -- mandados no endpoint usando ?
app.get('/testQuery', (req, res) => {
  res.send(req.query);
});

// Parametro NEXT - permite executar mais do que uma função
app.get(
  '/testMultipleHandlers',
  (req, res, next) => {
    console.log('Callback 1');
    next();
  },
  (req, res) => {
    console.log('Callback 2');
    // A última função precisa retornar .send() ou finalizar sem resposta .end()
    res.end();
  }
);

// next com array
const callback1 = (req, res, next) => {
  console.log('Callback 1');
  next();
};

function callback2(req, res, next) {
  console.log('Callback 2');
  next();
}

const callback3 = (req, res) => {
  console.log('Callback 3');
  res.end();
};

// executando com array callback
app.get('/testMultipleHandlersArray', [callback1, callback2, callback3]);

// Route - rotas com mesmo endpoint mas metodos diferentes
app
  .route('/testRoute')
  .get((_, res) => {
    res.send('/testRoute GET');
  })
  .post((_, res) => {
    res.send('/testRoute POST');
  })
  .delete((_, res) => {
    res.send('/testRoute DELETE');
  });

// Port
app.listen(3000, () => {
  console.log('API Started!');
});
