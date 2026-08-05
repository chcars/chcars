import axiosClient from "./api";

export const getQuestions = async (onlyHome) => {
	const response = await axiosClient.get("/questions", {
		params: onlyHome ? { home: true } : {}
	});

	return response.data;
};
