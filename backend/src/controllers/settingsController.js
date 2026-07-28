const settingsRepository = require("../repositories/settingsRepository");

async function getSettings(req, res) {
    try {
        const settings = await settingsRepository.getSettings();

        res.status(200).json(settings);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error al obtener la configuración."
        });
    }
}

module.exports = {
    getSettings
};