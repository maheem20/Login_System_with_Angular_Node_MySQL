const db = require('../util/database');

module.exports = class Post {
    constructor(title, body, user) {
        this.title = title;
        this.body = body;
        this.user = user;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM posts');
    }
};