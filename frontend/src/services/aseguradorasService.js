import axiosClient from "./api";

export const getAseguradoras = async () => {
	const response = await axiosClient.get("/aseguradoras");

	return response.data;
};
