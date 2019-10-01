const express = require('express');

const postsRouter = require('./posts/posts-router');

const server = express();

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => res.send('API up and running!'));

const port = 8000;
server.listen(port, () =>
  console.log(`\n*** Server Running on Port ${port} ***\n`),
);
