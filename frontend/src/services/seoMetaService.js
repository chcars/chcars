import axiosClient from "./api";

export const getSeoMeta = async (page) => {
	const response = await axiosClient.get("/seo", {
		params: { page }
	});

	return response.data;
};
