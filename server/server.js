const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3333;

// parse incoming json requests
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// statically serve the build folder 
// app.use('/dist', express.static(path.join(__dirname, '../dist')));

// app.use(express.static('client'));
// app.use(express.static('dist'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

// app.get('/grafport', (req, res) => {
  // console.log('in grafportback')
  // console.log(process.env.GRAFPORT)
  // res.status(200).send(process.env.GRAFPORT || '2222');
// })

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
;

//route error handler
app.use((req, res) =>
  res.status(404).send('Error, not the page you are looking for')
);

// global error handler to handle erros within middleware
app.use((err, req, res, next) => {
  //Define a default error object
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  // define an errorObj to combine new errors
  const errObj = Object.assign(defaultErr, err);
  console.log('Error: ', errObj.log);
  // return to the client the status and error message
  return res.status(errObj.status || 500).send(errObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

module.exports = app;
