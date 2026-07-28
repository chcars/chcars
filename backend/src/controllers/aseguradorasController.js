const aseguradorasRepository = require("../repositories/aseguradorasRepository");

async function getAseguradoras(req, res) {
    try {
        const aseguradoras = await aseguradorasRepository.getAseguradoras();

        res.status(200).json(aseguradoras);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error al obtener las aseguradoras."
        });
    }
}

module.exports = {
    getAseguradoras
};