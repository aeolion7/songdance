const express = require('express').Router();
const path = require('path');

router.get('/', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'index.html'));
});

router.get('/acro', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'acro.html'));
});

router.get('/contact', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'contact.html'));
});

router.get('/dance', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'dance.html'));
});

router.get('/events', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'events.html'));
});

router.get('/faculty', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'faculty.html'));
});

router.get('/faq', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'faq.html'));
});

router.get('/gallery', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'gallery.html'));
});

router.get('/karate', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'karate.html'));
});

router.get('/music', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'music.html'));
});

router.get('/programs', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'programs.html'));
});

router.get('/schedule', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'schedule.html'));
});

router.get('/tuition', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'tuition.html'));
});

module.exports = router;
