const express = require('express');

const Posts = require('../data/db');
const router = express.Router();

router.post('/', (req, res) => {
  if (!req.body.title || !req.body.contents) {
    res.status(400).json({
      errorMessage: 'Please provide title and contents for the post.',
    });
  } else {
    Posts.insert(req.body)
      .then(post => res.status(201).json(req.body))
      .catch(err =>
        res.status(500).json({
          error: 'There was an error while saving the post to the database.',
        }),
      );
  }
});

router.post('/:id/comments', (req, res) => {
  const commentObj = { ...req.body, post_id: req.params.id };

  if (!req.body.text) {
    res
      .status(400)
      .json({ errorMessage: 'Please provide text for the comment.' });
  } else {
    Posts.insertComment(commentObj)
      .then(comment => res.status(201).json(commentObj))
      .catch(err =>
        res.status(500).json({
          error: 'There was an error while saving the comment to the database.',
        }),
      );
  }
});

// calling insertComment while passing it a comment object will add it to the database and return an object with the id of the inserted comment. The object looks like this: { id: 123 }. This method will throw an error if the post_id field in the comment object does not match a valid post id in the database.

router.get('/', (req, res) => {
  Posts.find(req.query)
    .then(posts => res.status(200).json(posts))
    .catch(err =>
      res
        .status(500)
        .json({ error: 'The posts information could not be retrieved.' }),
    );
});

router.get('/:id', (req, res) => {
  Posts.findById(req.params.id)
    .then(post => {
      if (post[0]) {
        res.status(200).json(post);
      } else {
        res
          .status(404)
          .json({ message: 'The post with the specified ID does not exist.' });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: 'The post information could not be retrieved.' }),
    );
});

router.get('/:id/comments', (req, res) => {
  Posts.findPostComments(req.params.id)
    .then(post => {
      if (post[0]) {
        res.status(200).json(post);
      } else {
        res.status(404).json({
          message:
            'The post with the specified ID either does not exist or currently has no comments associated with it.',
        });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: 'The comments information could not be retrieved.' }),
    );
});

router.delete('/:id', (req, res) => {
  Posts.remove(req.params.id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res
          .status(404)
          .json({ message: 'The post with the specified ID does not exist.' });
      }
    })
    .catch(err =>
      res.status(500).json({ error: 'The post could not be removed.' }),
    );
});

router.put('/:id', (req, res) => {
  // res.send('Hello from the PUT /api/posts/:id endpoint');
  Posts.update();
});

// accepts two arguments, the first is the id of the post to update and the second is an object with the changes to apply. It returns the count of updated records. If the count is 1 it means the record was updated correctly.

module.exports = router;
