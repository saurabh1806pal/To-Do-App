// Core Module
const path = require('path');

// External Module
const express = require('express');
const { default: mongoose } = require('mongoose');
const DB_PATH = "mongodb+srv://root:root@completecoding.zieqllp.mongodb.net/todo?retryWrites=true&w=majority&appName=CompleteCoding";
const app = express();

app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, 'public')));
app.use(errorsController.pageNotFound);

const PORT = 3000;

mongoose.connect(DB_PATH).then(() => {
  console.log('Connected to Mongo');
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to Mongo: ', err);
});
