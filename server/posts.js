const express = require('express');
const router = express.Router();

// Example data (simulating a database)
let posts = [
  { id: 1, title: 'Post 1', content: 'Content of Post 1' },
  { id: 2, title: 'Post 2', content: 'Content of Post 2' },
];

// GET /api/posts - Get all posts
router.get('/', (req, res) => {
    
  res.json(...posts);
});

// POST /api/posts - Create a new post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
})

// PUT /api/posts/:id - Update a post
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const index = posts.findIndex(post => post.id === parseInt(id));
  if (index !== -1) {
    posts[index] = { id: parseInt(id), title, content };
    res.json(posts[index]);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// DELETE /api/posts/:id - Delete a post
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex(post => post.id === parseInt(id));
  if (index !== -1) {
    posts.splice(index, 1);
    res.json({ message: 'Post deleted' });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

module.exports = router;
