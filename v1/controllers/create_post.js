const post = require('../../db/post');

module.exports = (req, res) => {

    const body = req.body;
    const title = body.title;
    const content = body.content;
    const username = body.username;

    if (!title || !content || !username) {
        res.status(400).json({
            "error": "Missing Parameters"
        });
    }

    post.create(
        {
            title: title,
            content: content,
            username: username
        },
        (err, post) => {
            if (err) {
                res.json(err)
            } else {
                res.status(201).json(post);
            }
        }
    );
}