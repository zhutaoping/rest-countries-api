export const getCountries = async (url: string) => {
	if (!url) return;

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("Respond not OK!");
	}

	const data = await response.json();
	return data;
};
