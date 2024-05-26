const express = require('express');
const router = express.Router();
const postService = require('./postService');

const createPost = async(req, res, next) => {
    try {
        const { title, content, img } = req.body;
        console.log(`createPost - title: ${title}, description: ${description}, img: ${img}`);
        await postService.create(title, description, img);
        res.status(200).json({title, description, img});
    } catch (err) {
        res.status(404);  
        next(err); 
    }
}

const getPost = async(req, res, next) => {
    try {
        const id = parseInt(req.params.id); // URL 매개변수에서 id 가져오기
        console.log(`getPost - postId: ${id}`); 
        const post = await postService.getOne(id);
        res.status(200).json(post);
    } catch (err) {
        res.status(404);
        next(err);
    }
};

const deletePost = async(req, res, next) => {
    try {
        console.log("delete!");
        const id = parseInt(req.body.postId);
        const post = await postService.remove(id);
        res.status(200).json(post);
    } catch (err) {
        res.status(404);
        next(err);
    }
};

const updatePost = async(req, res, next) => {
    try {
        const { postId, title, description, img } = req.body;
        const post = await postService.update(postId, title, description, img);
        res.status(200).json(post);
    } catch (err) {
        res.status(404);
        next(err);
    }
};

const getAllPosts = async(req, res, next) => {
    try {
        // const id = parseInt(req.params.id); // URL 매개변수에서 id 가져오기
        // console.log(`getPost - postId: ${id}`); 
        console.log('getallPosts!!');
        const post = await postService.getAll();
        res.status(200).json(post);
    } catch (err) {
        res.status(404);
        next(err);
    }
}

router.get('/getOne/:id', getPost);
router.post('/postCreate', createPost);
router.get('/getAll', getAllPosts);
router.post('/postDelete', deletePost);
router.post('/postUpdate', updatePost);

module.exports = router;