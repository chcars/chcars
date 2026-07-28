const pool = require("../config/db");

async function getServices() {
    const result = await pool.query(`
        SELECT *
        FROM services
        ORDER BY display_order ASC
    `);

    return result.rows;
}

module.exports = {
    getServices
};