const aboutUsRepository = require("../repositories/aboutUsRepository");

async function getAboutUs(req, res) {
    try {
        const aboutUs = await aboutUsRepository.getAboutUs();

        res.status(200).json(aboutUs);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error al obtener la información de la empresa."
        });
    }
}

module.exports = {
    getAboutUs
};