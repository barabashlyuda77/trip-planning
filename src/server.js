const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');


const getContectFrom = (filePath) => {
  const pathToFile = path.resolve(__dirname, filePath);
  return fs.readFileSync(pathToFile, 'utf-8');
};

app.get('/', (req, res) => {
  const contentFromHtml = getContectFrom('../build/index.html');
  res.send(contentFromHtml);
});

app.get('/manifest.json', (req, res) => {
  const contentFromManifest = getContectFrom('../build/manifest.json');
  res.send(contentFromManifest);
});

app.use('/static', express.static(path.resolve(__dirname, '../build/static')));

app.listen(8000, () => console.log('App is running'));
