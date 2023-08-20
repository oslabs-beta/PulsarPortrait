// const express = require('express');
import express, { Request, Response, NextFunction, RequestHandler } from 'express'
// const {Request, Response, NextFunction, RequestHandles} = require('express')
// const path = require('path');
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3333;

type ServerError = {
  log: string,
  status: number,
  message: {}
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// statically serve the dist and client folder
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

//route error handler
app.use((req: Request, res: Response) =>
  res.status(404).send('Error, not the page you are looking for')
);

// global error handler to handle erros within middleware
app.use((err: ServerError, req: Request, res: Response, next: NextFunction) => {
  //Define a default error object
  const defaultErr: ServerError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  // define an errorObj to combine new errors
  const errObj: ServerError = Object.assign(defaultErr, err);
  console.log('Error: ', errObj.log);
  // return to the client the status and error message
  return res.status(errObj.status || 500).send(errObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

module.exports = app;
