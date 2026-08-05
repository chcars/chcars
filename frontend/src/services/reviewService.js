import axiosClient from "./api";

export const getReviews = async (limit) => {
	const response = await axiosClient.get("/reviews", {
		params: limit !== undefined && limit !== null ? { limit } : {}
	});

	return response.data;
};
