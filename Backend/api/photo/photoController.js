const express = require('express');
const router = express.Router();
const photoService = require('./photoService');

const createPhoto = async(req, res, next) => {
    try {
        const { img } = req.body; 
        console.log(`createImg - img: ${img}`);
        await photoService.create(img);
        res.status(200).json({img});
    } catch (err) {
        res.status(404);
        next(err);
    }
}

const getPhoto = async(req, res, next) => {
    try {
        const id = parseInt(req.params.id); // URL 매개변수에서 id 가져오기
        console.log(`getPost - postId: ${id}`); 
        const img = await photoService.getOne(id);
        res.status(200).json(img);
    } catch (err) {
        res.status(404);
        next(err);
    }
};

const deletePhoto = async(req, res, next) => {
    try {
        console.log("delete!");
        const id = parseInt(req.body.photoId);
        const post = await photoService.remove(id);
        res.status(200).json(post);
    } catch (err) {
        res.status(404);
        next(err);
    }
};

const updatePhoto = async(req, res, next) => {
    try {
        const { photoId, img } = req.body;
        const photo = await photoService.update(postId, img);
        res.status(200).json(photo);
    } catch (err) {
        res.status(404);
        next(err);
    }
};

const getAllPhotos = async(req, res, next) => {
    try {
        //const id = parseInt(req.params.id); // URL 매개변수에서 id 가져오기
        // console.log(`getPost - postId: ${id}`); 
        console.log('getallPosts!!');
        const photo = await photoService.getAll();
        res.status(200).json(photo);
    } catch (err) {
        res.status(404);
        next(err);
    }
}

router.get('/getOne/:id', getPhoto);
router.post('/photoCreate', createPhoto);
router.get('/getAll', getAllPhotos);
router.post('/photoDelete', deletePhoto);
router.post('/photoUpdate', updatePhoto);

module.exports = router;  