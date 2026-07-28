const googleReviewsRepository = require("../repositories/googleReviewsRepository");

async function getGoogleReviews(req, res) {
    try {
        const limit = req.query.limit;
        const googleReviews = await googleReviewsRepository.getGoogleReviews(limit);

        res.status(200).json(googleReviews);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error al obtener las reseñas."
        });
    }
}

module.exports = {
    getGoogleReviews
};