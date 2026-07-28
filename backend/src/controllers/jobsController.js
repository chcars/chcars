const jobsRepository = require("../repositories/jobsRepository");

async function getJobs(req, res) {
    try {
        const category = req.query.category;
        const jobs = await jobsRepository.getJobs(category);

        res.status(200).json(jobs);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error al obtener los trabajos."
        });
    }
}

module.exports = {
    getJobs
};