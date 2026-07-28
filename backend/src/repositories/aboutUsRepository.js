const pool = require("../config/db");

async function getAboutUs() {
    const result = await pool.query(`
        SELECT *
        FROM about_us
        LIMIT 1
    `);

    return result.rows[0];
}

module.exports = {
    getAboutUs
};