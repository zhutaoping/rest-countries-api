import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import CountryList from "./components/CountryList";
import { ThemeProvider } from "./context/ThemeContext";
import { useEffect, useState } from "react";

export interface State {
	name: string;
	region: string;
	population: number;
	capital: string;
	flag: string;
}

function App() {
	const [query, setQuery] = useState("");
	const [data, setData] = useState<State[]>([]);

	useEffect(() => {
		handleGetData("");
	}, []);

	const handleGetData = async (query: string) => {
		let url;

		if (query.length === 0)
			url = "https://restcountries.com/v3.1/name/republic";
		else url = `https://restcountries.com/v3.1/name/${query}`;

		const res = await fetch(url);
		const json = await res.json();

		for (let js of json) {
			setData((prevData) => [
				...prevData,
				{
					name: js.name.common,
					region: js.region,
					population: js.population,
					capital: js.capital,
					flag: js.flags.png,
				},
			]);
		}
	};

	const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleGetData(query);
		setQuery("");
		setData([]);
	};

	return (
		<ThemeProvider>
			<Header />
			<div className="flex flex-col justify-between">
				<SearchSection
					query={query}
					onQuery={handleQuery}
					onSubmit={handleSubmit}
				/>
				<CountryList data={data} />
			</div>
		</ThemeProvider>
	);
}

export default App;
