import { useLocation } from "react-router-dom";
import CountryList from "../components/CountryList";
import Spinner from "../components/Spinner";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../helpers/countriesApi";
import { dataRefine } from "../helpers/dataRefining";
import { useState, useEffect } from "react";
import { State } from "../helpers/dataRefining";

const Border = () => {
	const [data, setData] = useState<State[]>([]);

	const { state } = useLocation();

	const {
		data: raw,
		isLoading,
		isError,
	} = useQuery(["border", state], () =>
		getCountries(`https://restcountries.com/v3.1/alpha/${state}`)
	);

	useEffect(() => {
		if (raw) {
			const refined = dataRefine(raw);
			setData(refined);
		}
	}, [raw]);

	return (
		<div>
			<div>
				{isLoading && <Spinner />}
				{isError && (
					<h1 className="text-2xl text-center dark:text-white">
						"Something went wrong!"
					</h1>
				)}
				<CountryList data={data} />
			</div>
		</div>
	);
};

export default Border;
