import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import CountryList from "../components/CountryList";
import Spinner from "../components/Spinner";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../helpers/countriesApi";
import { dataRefine } from "../helpers/dataRefining";
import { useState, useEffect } from "react";
import { State } from "../helpers/dataRefining";

const Countries = () => {
	// const { data, isLoading, error } = useFetch(
	// 	`https://restcountries.com/v3.1/name/${state}`
	// );
	const { state } = useLocation();

	const [data, setData] = useState<State[]>([]);

	const {
		data: raw,
		isLoading,
		isError,
	} = useQuery(["query", state], () =>
		getCountries(`https://restcountries.com/v3.1/name/${state}`)
	);

	useEffect(() => {
		if (raw) {
			const refined = dataRefine(raw);
			setData(refined);
		}
	}, [raw]);

	return (
		<div>
			{isLoading && <Spinner />}
			{isError && (
				<h1 className="text-2xl text-center dark:text-white">
					"Something went wrong!"
				</h1>
			)}
			<CountryList data={data} />
		</div>
	);
};

export default Countries;
