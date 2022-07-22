import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import CountryList from "./components/CountryList";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

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

function App() {
	const [query, setQuery] = useState("");
	const [data, setData] = useState<State[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		handleGetData("");
	}, []);

	const handleGetData = async (query: string) => {
		let url;

		if (query.length === 0) url = "https://restcountries.com/v3.1/all";
		else url = `https://restcountries.com/v3.1/name/${query}`;

		const res = await fetch(url);
		const json = await res.json();

		console.log(json);

		for (let js of json) {
			interface LooseObject {
				[key: string]: string;
			}

			const nativeName = Object.values<LooseObject>(js.name.nativeName)[0]
				.common;

			const langs = Object.values<string>(js.languages).join();

			let currencies: string;
			if (js.currencies) currencies = Object.keys(js.currencies)[0];
			else return "N/A";

			let tld: string;
			if (js.tld) tld = js.tld[0];
			else tld = "N/A";

			setData((prevData) => [
				...prevData,
				{
					name: js.name.common,
					region: js.region,
					population: js.population,
					capital: js.capital,
					flag: js.flags.svg,
					nativeName: nativeName,
					subregion: js.subregion,
					topLevelDomain: tld,
					currencies: currencies,
					langs: langs,
					borders: js.borders,
				},
			]);
		}
	};

	const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		navigate("countrylist");

		handleGetData(query);
		setQuery("");
		setData([]);
	};

	return (
		<>
			<SearchSection
				query={query}
				onQuery={handleQuery}
				onSubmit={handleSubmit}
			/>
			<Routes>
				<Route path="countrylist" element={<CountryList data={data} />} />
			</Routes>
		</>
	);
}

export default App;
