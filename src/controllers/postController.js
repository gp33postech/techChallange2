// Importa o modelo Post
const Post = require('../models/postModel');

// Lista todos os posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Busca um post pelo ID
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post não encontrado' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Criação de um novo post
const createPost = async (req, res) => {
    try {
        const { title, description, image, author } = req.body;
        const newPost = new Post({ title, description, image, author, modifiedAt: new Date() });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Atualiza um post existente
const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post não encontrado' });
        }
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exclui um post
const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post não encontrado' });
        }
        res.json({ message: 'Post excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Busca posts por palavra-chave
const searchPosts = async (req, res) => {
    try {
        const { query } = req.query;     
        const posts = await Post.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exporta todas as funções
module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    searchPosts
};