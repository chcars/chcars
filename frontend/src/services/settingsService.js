import axiosClient from "./api";

export const getSettings = async () => {
	const response = await axiosClient.get("/settings");

	return response.data;
};
