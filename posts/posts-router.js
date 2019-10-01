const express = require('express');

const Posts = require('../data/db');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Hello from the POST /api/posts endpoint');
});

router.post('/:id/comments', (req, res) => {
  res.send('Hello from the POST /api/posts/:id/comments endpoint');
});

router.get('/', (req, res) => {
  res.send('Hello from the GET /api/posts endpoint');
});

router.get('/:id', (req, res) => {
  res.send('Hello from the GET /api/posts/:id endpoint');
});

router.get('/:id/comments', (req, res) => {
  res.send('Hello from the GET /api/posts/:id/comments endpoint');
});

router.delete('/:id', (req, res) => {
  res.send('Hello from the DELETE /api/posts/:id endpoint');
});

router.put('/:id', (req, res) => {
  res.send('Hello from the PUT /api/posts/:id endpoint');
});

module.exports = router;
