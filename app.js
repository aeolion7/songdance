const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./routes/index');
const path = require('path');
const PORT = 2500;

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
