import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/App.jsx';

const app = express();

app.use(express.static(path.resolve('public')));

app.get('*', function(req, res) {
  const content = renderToString(<App/>);
  const html = `
  <html>
  <head>
    <title>Stack Sticker</title>
  </head>
  <body>
    <div id="app">${content}</div>
    <script src="main.js"></script>
  </body>
  </html>
  `;

  res.send(html);
});

app.listen(3000, () => console.log('Server is listening on 3000'));