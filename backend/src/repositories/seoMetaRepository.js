const pool = require("../config/db");

async function getSeoMeta(page) {
    const result = await pool.query(
        `
            SELECT *
            FROM seo_meta
            WHERE page = $1
            LIMIT 1
        `,
        [page]
    );

    return result.rows[0];
}

module.exports = {
    getSeoMeta
};