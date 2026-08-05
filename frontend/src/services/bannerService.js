import axiosClient from "./api";

export const getBanner = async () => {
	const response = await axiosClient.get("/banner");

	return response.data;
};
