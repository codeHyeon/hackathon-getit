const { Post } = require('../../models');

const create = async (title, description, img) => {
    try {
        const post = await Post.create({
            title: title,
            description: description,
            img: img
        });
    } catch (err) {
        console.error("postService.create error");
        throw err;
    }
};

const getOne = async (postId) => {
    try {
        const post = await Post.findOne({
            where: {
                postId: postId
            } 
        }
        );
        console.log(post);
        return post;
    } catch (err) {
        console.error("postService.getOne error");
        throw err;
    }
};

const remove = async(postId) => {
    try {
        const post = await Post.findOne({
            where: {
                postId: postId
            }
        }
        );
        if (post) {
            await post.destroy();
        } else {
            throw new Error('Post not found');
        }
    } catch (err) {
        console.error("postService.remove error");
        throw err;
    }
};

const getAll = async (postId) => {
    try {
        const post = await Post.findAll();
        console.log(post);
        return post;
    } catch (err) {
        console.error("postService.getAll error");
        throw err;
    }
    
};

const update = async(postId, title, description, img) => {
    try {
        const post = await Post.findOne({
            where: {
                postId: postId
            }
        })
        if (post) {
            await post.update({ title, description, img });
        } else {
            throw new Error('Post not found');
        }
    } catch (err) {
        console.error("postService.update error");
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