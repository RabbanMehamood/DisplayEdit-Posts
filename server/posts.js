const express = require('express');
const router = express.Router();

let posts = [
  { id: 1, title: 'Post 1', content: 'Content of Post 1' },
  { id: 2, title: 'Post 2', content: 'Content of Post 2' },
  { id: 3, title: 'Post 3', content: 'Content of Post 3' }
];

// GET all posts
router.get('/', (req, res) => {
  res.status(200).json(posts);
});

// ADD a new post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// EDIT an existing post
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const postIndex = posts.findIndex(post => post.id === parseInt(id));

  if (postIndex !== -1) {
    posts[postIndex] = { id: parseInt(id), title, content };
    res.status(200).json(posts[postIndex]);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// DELETE a post
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex(post => post.id === parseInt(id));

  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

module.exports = router;
