import axiosClient from "./api";

export const getJobs = async (category) => {
	const response = await axiosClient.get("/jobs", {
		params: category ? { category } : {}
	});

	return response.data;
};
