const pool = require("../config/db");

async function getAseguradoras() {
    const result = await pool.query(`
        SELECT *
        FROM aseguradoras
        ORDER BY name ASC
    `);

    return result.rows;
}

module.exports = {
    getAseguradoras
};