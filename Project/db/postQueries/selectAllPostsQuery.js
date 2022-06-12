const getConnection = require('../getConnection');

const selectAllPostsQuery = async () => {
    let connection;
    try {
        connection = await getConnection();
        const [posts] = await connection.query(`
        SELECT P.title, P.descriptions, P.city, P.suburb, P.attended, P.image, P.createdAt FROM post P
        `);
        return posts;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectAllPostsQuery;
