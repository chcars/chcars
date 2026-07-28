const bannerRepository = require("../repositories/bannerRepository");

async function getBanner(req, res) {
    try {
        const banner = await bannerRepository.getBanner();

        res.status(200).json(banner);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error al obtener el banner."
        });
    }
}

module.exports = {
    getBanner
};