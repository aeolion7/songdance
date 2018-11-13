const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).sendFile('../public/index.html');
});

router.get('/acro', (req, res, next) => {
  res.status(200).sendFile('../public/acro.html');
});

router.get('/contact', (req, res, next) => {
  res.status(200).sendFile('../public/contact/html');
});

router.get('/dance', (req, res, next) => {
  res.status(200).sendFile('../public/dance.html');
});

router.get('/events', (req, res, next) => {
  res.status(200).sendFile('../public/events.html');
});

router.get('/faculty', (req, res, next) => {
  res.status(200).sendFile('../public/faculty.html');
});

router.get('/faq', (req, res, next) => {
  res.status(200).sendFile('../public/faq.html');
});

router.get('/gallery', (req, res, next) => {
  res.status(200).sendFile('../public/gallery.html');
});

router.get('/karate', (req, res, next) => {
  res.status(200).sendFile('../public/karate.html');
});

router.get('/music', (req, res, next) => {
  res.status(200).sendFile('../public/music.html');
});

router.get('/programs', (req, res, next) => {
  res.status(200).sendFile('../public/programs.html');
});

router.get('/schedule', (req, res, next) => {
  res.status(200).sendFile('../public/schedule.html');
});

router.get('/tuition', (req, res, next) => {
  res.status(200).sendFile('../public/tuition.html');
});

module.exports = router;
