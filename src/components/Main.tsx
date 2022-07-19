import { useEffect, useState } from "react";
import CountryItem from "./CountryItem";

export interface State {
	name: string;
	region: string;
	population: number;
	capital: string;
	flag: string;
}

type Props = {
	query: string;
};

const Main = ({ query }: Props) => {
	const [data, setData] = useState<State[]>([]);

	useEffect(() => {
		handleGetData("");
	}, []);

	const handleGetData = async (query: string) => {
		let url;

		if (query.length === 0) url = "https://restcountries.com/v3.1/region/asia";
		else url = `https://restcountries.com/v3.1/name/${query}`;
		console.log(url);

		const res = await fetch(url);
		const json = await res.json();
		console.log(json.length);
		console.log(json[0]);

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

	return (
		<main>
			{data.map((da, i) => (
				<CountryItem
					query={query}
					key={i}
					name={da.name}
					region={da.region}
					population={da.population}
					capital={da.capital}
					flag={da.flag}
				/>
			))}
		</main>
	);
};

export default Main;
