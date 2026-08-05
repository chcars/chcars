import axiosClient from "./api";

export const getServices = async () => {
	const response = await axiosClient.get("/services");

	return response.data;
};
