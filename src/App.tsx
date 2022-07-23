import SearchSection from "./components/SearchSection";
import CountryList from "./components/CountryList";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CountryPage from "./routes/CountryPage";

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

	let isAlpha3 = false;
	const handleGetData = async (query: string) => {
		let url;

		if (query.length === 0) {
			url = "https://restcountries.com/v3.1/all";
		} else if (isAlpha3) {
			url = `https://restcountries.com/v3.1/alpha/${query}`;
			isAlpha3 = false;
		} else {
			url = `https://restcountries.com/v3.1/name/${query}`;
		}
		const res = await fetch(url);
		const json = await res.json();

		for (let js of json) {
			interface LooseObject {
				[key: string]: string;
			}
			// console.log(js);
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

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		isAlpha3 = true;
		const query = e.currentTarget.value;
		console.log(query);
		handleGetData(query);
		navigate("countrylist", { state: data[0] });
		setData([]);
	};

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<SearchSection
								query={query}
								onQuery={handleQuery}
								onSubmit={handleSubmit}
							/>
							<CountryList data={data} />
						</>
					}
				/>
				<Route
					path="/countrylist"
					element={
						<>
							<SearchSection
								query={query}
								onQuery={handleQuery}
								onSubmit={handleSubmit}
							/>
							<CountryList data={data} />
						</>
					}
				/>
				<Route
					path="/countrypage/:name"
					element={<CountryPage onClick={handleClick} />}
				/>
			</Routes>
		</>
	);
}

export default App;
