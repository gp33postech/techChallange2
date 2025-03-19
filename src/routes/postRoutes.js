const express = require('express');
const router = express();
const postController = require('../controllers/postController');

router.use(express.json());

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Busca todos os Posts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               
 *     responses:
 *       200:
 *         description: Consulta Realizada com Sucesso
 */
router.get('/posts', postController.getAllPosts);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Busca um Post por Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               
 *     responses:
 *       200:
 *         description: Consulta Realizada com Sucesso
 */
router.get('/posts/:id', postController.getPostById);

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Cria um novo post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               author:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date  
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 */
router.post('/posts', postController.createPost);

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Atualiza um post existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do post a ser atualizado
 *         schema:
 *           type: string  # Caso o ID seja uma string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso
 *       404:
 *         description: Post não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Post não encontrado"
 */
router.put('/posts/:id', postController.updatePost);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Deleta um post específico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do post a ser deletado
 *         schema:
 *           type: string  # Caso o ID seja uma string
 *     responses:
 *       204:
 *         description: Post deletado com sucesso
 *       404:
 *         description: Post não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Post não encontrado"
 */
router.delete('/posts/:id', postController.deletePost);

/**
 * @swagger
 * /posts/search:
 *   search:
 *     summary: Busca por posts
 *     parameters:
 *       - in: query
 *         name: title
 *         required: false
 *         description: Titulo do post a ser buscado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de posts que correspondem ao critério de busca
 */
router.search('/posts/search', postController.searchPosts);

module.exports = router;
