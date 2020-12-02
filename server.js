const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static('./dist/metasite-ex-front'));

app.get('/*', function () {
  res.sendFile(path.join(__dirname, './../dist/metasite-ex-front/index.html'));
  console.log('path', path.join(__dirname, './../dist/metasite-ex-front/index.html'))
});

app.listen(process.env.PORT || 8080);
