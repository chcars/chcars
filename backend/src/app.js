const express = require("express");
const cors = require("cors");

const settingsRoutes = require("./routes/settingsRoute");
const servicesRoutes = require("./routes/servicesRoutes");
const jobsRoutes = require("./routes/jobsRoutes");
const questionsRoutes = require("./routes/questionsRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const aseguradorasRoutes = require("./routes/aseguradorasRoutes");
const aboutUsRoutes = require("./routes/aboutUsRoutes");
const seoMetaRoutes = require("./routes/seoMetaRoutes");
const googleReviewsRoutes = require("./routes/googleReviewsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.json({
		success: true,
		message: "CH Cars backend is running"
	});
});

app.use("/api/settings", settingsRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/jobs", jobsRoutes);
app.use("/api/questions", questionsRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/aseguradoras", aseguradorasRoutes);
app.use("/api/about-us", aboutUsRoutes);
app.use("/api/seo", seoMetaRoutes);
app.use("/api/reviews", googleReviewsRoutes);

module.exports = app;