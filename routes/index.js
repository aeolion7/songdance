const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
  res.status(200).sendFile('../public/index.html');
});

router.get('/acro', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'acro.html'));
});

router.get('/contact', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'contact.html'));
});

router.get('/dance', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'dance.html'));
});

router.get('/events', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'events.html'));
});

router.get('/faculty', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'faculty.html'));
});

router.get('/faq', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'faq.html'));
});

router.get('/gallery', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'gallery.html'));
});

router.get('/karate', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'karate.html'));
});

router.get('/music', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'music.html'));
});

router.get('/programs', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'programs.html'));
});

router.get('/schedule', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'schedule.html'));
});

router.get('/tuition', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'tuition.html'));
});

// TODO: create custom 404 page
router.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

// TODO: create custom 500 page
router.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('Server Error');
});

module.exports = router;
