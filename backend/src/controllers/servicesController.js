const servicesRepository = require("../repositories/servicesRepository");

async function getServices(req, res) {
    try {
        const services = await servicesRepository.getServices();

        res.status(200).json(services);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error al obtener los servicios."
        });
    }
}

module.exports = {
    getServices
};