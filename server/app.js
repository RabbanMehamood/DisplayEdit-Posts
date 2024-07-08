const express = require('express');
const cors = require('cors');
const postsRoutes = require('./posts');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postsRoutes);

// Start server
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
