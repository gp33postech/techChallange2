const express = require('express');
const router = express();
const postController = require('../controllers/postController');  // Certifique-se de que o caminho está correto!

router.use(express.json());

// Defina suas rotas
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);
router.search('/posts/search', postController.searchPosts);

module.exports = router;
