const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./routes/index');
const path = require('path');
const PORT = 2500;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

router.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, './public', 'notfound.html'));
});

router.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).sendFile(path.join(__dirname, './public', 'serverr.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
