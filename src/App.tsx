import SearchSection from "./components/SearchSection";
import CountryList from "./components/CountryList";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DetailsPage from "./routes/DetailsPage";

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
	const [list, setList] = useState<State[]>([]);
	const [filtered, setFiltered] = useState<State[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		handleGetData("");
	}, []);

	let isAlpha3 = false;
	let isList = false;
	let isFilter = false;

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
		// console.log(json);

		for (let js of json) {
			interface LooseObject {
				[key: string]: string;
			}

			let nativeName: string;
			if (js.name.nativeName) {
				nativeName = Object.values<LooseObject>(js.name.nativeName)[0].common;
			} else {
				nativeName = "n/a";
			}

			let langs: string;
			if (js.langs) {
				langs = Object.values<string>(js.languages).join();
			} else {
				langs = "n/a";
			}

			let currencies: string;
			if (js.currencies) currencies = Object.keys(js.currencies)[0];
			else currencies = "n/a";

			let tld: string;
			tld = js.tld ? js.tld[0] : "n/a";

			if (isList) {
				setList((prevData) => [
					...prevData,
					{
						name: js.name.common,
						region: js.region,
						population: js.population,
						capital: js.capital || "n/a",
						flag: js.flags.svg,
						nativeName: nativeName,
						subregion: js.subregion || "n/a",
						topLevelDomain: tld,
						currencies: currencies,
						langs: langs,
						borders: js.borders,
					},
				]);
				isList = false;
			} else {
				setData((prevData) => [
					...prevData,
					{
						name: js.name.common,
						region: js.region,
						population: js.population,
						capital: js.capital || "n/a",
						flag: js.flags.svg,
						nativeName: nativeName,
						subregion: js.subregion || "n/a",
						topLevelDomain: tld,
						currencies: currencies,
						langs: langs,
						borders: js.borders,
					},
				]);
			}
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
		isList = true;
		const query = e.currentTarget.value;
		handleGetData(query);
		navigate("countrylist", { state: list });
		console.log(list);
		setList([]);
	};

	const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
		const filter = e.currentTarget.textContent;
		console.log(data);
		const filteredData = data.filter((el) => el.region === filter);
		setFiltered(filteredData);
		console.log(filteredData);
		navigate("region", { state: filtered });
		// setFiltered([]);
	};

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<SearchSection
								onFilter={handleFilter}
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
								onFilter={handleFilter}
								query={query}
								onQuery={handleQuery}
								onSubmit={handleSubmit}
							/>
							<CountryList data={list} />
						</>
					}
				/>
				<Route
					path="/region"
					element={
						<>
							<SearchSection
								onFilter={handleFilter}
								query={query}
								onQuery={handleQuery}
								onSubmit={handleSubmit}
							/>
							<CountryList data={filtered} />
						</>
					}
				/>
				<Route
					path="/detailspage/:name"
					element={<DetailsPage onClick={handleClick} />}
				/>
			</Routes>
		</>
	);
}

export default App;
