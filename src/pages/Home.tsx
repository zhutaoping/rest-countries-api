import CountryList from "../components/CountryList";
import Spinner from "../components/Spinner";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../helpers/countriesApi";
import { dataRefine } from "../helpers/dataRefining";
import { useState, useEffect } from "react";
import { State } from "../helpers/dataRefining";
import { useFilter } from "../context/FilterContext";

const Home = () => {
	const [data, setData] = useState<State[]>([]);
	const [filteredData, setFilteredData] = useState<State[]>([]);

	const { filter } = useFilter();
	console.log(filteredData);

	const {
		data: raw,
		isLoading,
		isError,
	} = useQuery(["all"], () =>
		getCountries("https://restcountries.com/v3.1/all")
	);

	useEffect(() => {
		if (raw) {
			const refined = dataRefine(raw);
			setData(refined);
		}
	}, [raw]);

	useEffect(() => {
		console.log(filter);
		if (filter && data) {
			const filtered = data.filter((da) => da.region === filter);
			setFilteredData(filtered);
		}
	}, [filter, data]);

	return (
		<>
			{isLoading && <Spinner />}
			{isError && (
				<div className="text-white font-bold bg-teal-500 dark:bg-purple-500">
					<h1 className="text-3xl p-4 dark:text-white text-center tracking-wider">
						"Something went wrong!!"
					</h1>
				</div>
			)}
			{filter && <CountryList data={filteredData} />}
			{filteredData.length === 0 && <CountryList data={data} />}
		</>
	);
};

export default Home;
