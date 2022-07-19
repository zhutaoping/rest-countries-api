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
		console.log(query);

		if (query.length === 0) url = "https://restcountries.com/v3.1/region/asia";
		else url = `https://restcountries.com/v3.1/name/${query}`;

		const res = await fetch(url);
		const json = await res.json();

		console.log("test:", json);
		for (let i = 0; i < json.length; i++) {
			setData((prevData) => [
				...prevData,
				{
					name: json[i].name.common,
					region: json[i].region,
					population: json[i].population,
					capital: json[i].capital,
					flag: json[i].flags.png,
				},
			]);
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		handleGetData(query);
		setQuery("");
		setData([]);
	};

	return (
		<ThemeProvider>
			<Header />
			<SearchSection
				query={query}
				onQuery={(e: React.ChangeEvent<HTMLInputElement>): void =>
					setQuery(e.target.value)
				}
				onSubmit={(e: React.FormEvent) => handleSubmit(e)}
			/>
			<CountryList data={data} />
		</ThemeProvider>
	);
}

export default App;
