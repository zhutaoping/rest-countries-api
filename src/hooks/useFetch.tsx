import { useState, useEffect } from "react";

export interface State {
	name: string;
	region: string;
	population: number;
	capital: string;
	flag: string;
	nativeName: string;
	subregion: string;
	topLevelDomain: string;
	currencies: string;
	langs: string;
	borders: string[];
}

export const useFetch = (url: string) => {
	const [data, setData] = useState<State[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		if (!url) return;

		const fetchData = async () => {
			setIsLoading(true);
			// setData([]);

			try {
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(response.statusText);
				}

				const data = await response.json();

				for (let da of data) {
					interface LooseObject {
						[key: string]: string;
					}

					let nativeName: string;
					if (da.name.nativeName) {
						nativeName = Object.values<LooseObject>(da.name.nativeName)[0]
							.common;
					} else {
						nativeName = "n/a";
					}

					let langs: string;
					if (da.languages) {
						let arr = [];
						for (let key in da.languages) {
							arr.push(da.languages[key]);
						}
						langs = arr.join(", ");
					} else {
						langs = "n/a";
					}

					const currencies = da.currencies
						? Object.keys(da.currencies)[0]
						: "n/a";

					const tld = da.tld ? da.tld[0] : "n/a";

					const temp = {
						name: da.name.common,
						region: da.region,
						population: da.population,
						capital: da.capital || "n/a",
						flag: da.flags.svg,
						nativeName: nativeName,
						subregion: da.subregion || "n/a",
						topLevelDomain: tld,
						currencies: currencies,
						langs: langs,
						borders: da.borders,
					};
					setData((prevData) => [...prevData, temp]);
				}

				setIsLoading(false);
				setError("");
			} catch (err) {
				setIsLoading(false);
				setError("無法取得資料");
			}
		};
		fetchData();
	}, [url]);

	return { data, isLoading, error };
};
