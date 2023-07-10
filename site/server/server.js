const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 2222;

// parse incoming json requests
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})


app.use((req,res) => res.status(404).send('Error, not the page you are looking for'));


app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))


module.exports = app;