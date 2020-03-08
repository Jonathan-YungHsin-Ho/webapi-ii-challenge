require('dotenv').config();

const express = require('express');
const cors = require('cors');

const postsRouter = require('./posts/posts-router');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => res.send('API up and running!'));

const port = process.env.PORT || 8000;
server.listen(port, () =>
  console.log(`\n*** Server Running on Port ${port} ***\n`),
);
