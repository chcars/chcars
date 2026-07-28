const pool = require("../config/db");

async function getGoogleReviews(limit) {
    const reviewLimit = limit === undefined || limit === null ? 6 : limit;

    const result = await pool.query(
        `
            SELECT *
            FROM google_reviews
            ORDER BY rating DESC
            LIMIT $1
        `,
        [reviewLimit]
    );

    return result.rows;
}

module.exports = {
    getGoogleReviews
};