const pool = require("../config/db");

async function getSettings() {
    const result = await pool.query(`
        SELECT *
        FROM settings
        LIMIT 1
    `);

    return result.rows[0];
}

module.exports = {
    getSettings
};