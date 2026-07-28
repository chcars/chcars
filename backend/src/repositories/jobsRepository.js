const pool = require("../config/db");

async function getJobs(category) {
    if (category !== undefined && category !== null) {
        const result = await pool.query(
            `
                SELECT *
                FROM jobs
                WHERE category = $1
                ORDER BY display_order ASC
            `,
            [category]
        );

        return result.rows;
    }

    const result = await pool.query(`
        SELECT *
        FROM jobs
        ORDER BY display_order ASC
    `);

    return result.rows;
}

module.exports = {
    getJobs
};