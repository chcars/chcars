const questionsRepository = require("../repositories/questionsRepository");

async function getQuestions(req, res) {
    try {
        const onlyHome = req.query.home === "true";
        const questions = await questionsRepository.getQuestions(onlyHome);

        res.status(200).json(questions);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error al obtener las preguntas frecuentes."
        });
    }
}

module.exports = {
    getQuestions
};