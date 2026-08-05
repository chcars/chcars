import axiosClient from "./api";

export const getAboutUs = async () => {
	const response = await axiosClient.get("/about-us");

	return response.data;
};
