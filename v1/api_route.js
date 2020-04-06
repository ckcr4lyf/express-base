const express = require('express');
const router = express.Router();

const create_post = require('./controllers/create_post');
const get_posts = require('./controllers/get_posts');

router.post('/post', create_post);
router.get('/posts', get_posts);

module.exports = router;