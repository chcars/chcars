const seoMetaRepository = require("../repositories/seoMetaRepository");

async function getSeoMeta(req, res) {
    try {
        const page = req.query.page;

        if (!page) {
            return res.status(400).json({
                message: "Falta el parámetro page."
            });
        }

        const seoMeta = await seoMetaRepository.getSeoMeta(page);

        res.status(200).json(seoMeta);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error al obtener los metadatos SEO."
        });
    }
}

module.exports = {
    getSeoMeta
};