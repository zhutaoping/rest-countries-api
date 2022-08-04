import { useLocation } from "react-router-dom";
import CountryList from "../components/CountryList";
import Spinner from "../components/Spinner";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../helpers/countriesApi";
import { dataRefine } from "../helpers/dataRefining";
import { useState, useEffect } from "react";
import { State } from "../helpers/dataRefining";
import { useFilter } from "../context/FilterContext";
import NoMatch from "./NoMatch";

const Countries = () => {
	const { state } = useLocation();

	const [data, setData] = useState<State[]>([]);
	const [filteredData, setFilteredData] = useState<State[]>([]);

	const { filter } = useFilter();

	const {
		data: raw,
		isLoading,
		isError,
	} = useQuery(
		["query", state],
		() => getCountries(`https://restcountries.com/v3.1/name/${state}`),
		{ retry: false }
	);

	useEffect(() => {
		if (raw) {
			const refined = dataRefine(raw);
			setData(refined);
		}
	}, [raw]);

	useEffect(() => {
		if (filter && data) {
			const filtered = data.filter((da) => da.region === filter);
			setFilteredData(filtered);
		}
	}, [filter, data]);

	return (
		<div>
			{isLoading && <Spinner />}
			{isError && <h1 className="error">{"查無結果"}</h1>}
			{filter && <CountryList data={filteredData} />}
			{filteredData.length === 0 && <CountryList data={filteredData} />}
			{filter === "All" && <CountryList data={data} />}
			{filter === "" && <CountryList data={data} />}
		</div>
	);
};

export default Countries;
