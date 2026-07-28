const pool = require("../config/db");

async function getQuestions(onlyHome) {
    if (onlyHome) {
        const result = await pool.query(`
            SELECT *
            FROM questions
            WHERE show_on_home = true
            ORDER BY display_order ASC
        `);

        return result.rows;
    }

    const result = await pool.query(`
        SELECT *
        FROM questions
        ORDER BY category ASC, display_order ASC
    `);

    return result.rows;
}

module.exports = {
    getQuestions
};