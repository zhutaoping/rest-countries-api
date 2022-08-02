export const getCountries = async (url: string) => {
	if (!url) return;

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("查無此頁");
	}

	const data = await response.json();
	return data;
};
