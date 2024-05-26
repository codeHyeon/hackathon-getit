
const { Photo } = require('../../models');

const create = async (img) => {
    try {
        const photo = await Photo.create({
            img: img
        });
    } catch (err) { 
        console.error("photoService.create error");
        throw err;
    }
};

const getOne = async (photoId) => {
    try {
        const photo = await Photo.findOne({
            where: {
                photoId: photoId
            }
        }
        );
        console.log(photo);
        return photo;
    } catch (err) {
        console.error("photoService.getOne error");
        throw err;
    }
};

const remove = async(photoId) => {
    try {
        const photo = await Photo.findOne({
            where: {
                photoId: photoId
            }
        }
        );
        if (photo) {
            await photo.destroy();
        } else {
            throw new Error('Photo not found');
        }
    } catch (err) {
        console.error("photoService.remove error");
        throw err;
    }
};

const getAll = async (photoId) => {
    try {
        const photo = await Photo.findAll();
        console.log(photo);
        return photo;
    } catch (err) {
        console.error("photoService.getAll error");
        throw err;
    }
    
};

const update = async(photoId, img) => {
    try {
        const photo = await Photo.findOne({
            where: {
                photoId: photoId
            }
        })
        if (photo) {
            await photo.update({ img });
        } else {
            throw new Error('Photo not found');
        }
    } catch (err) {
        console.error("photoService.update error");
        throw err;
    }
};

module.exports = {
    getOne,
    getAll,
    create,
    remove,
    update
};