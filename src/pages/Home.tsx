// import CountryItem from "../components/CountryItem";
import { useEffect, useState, useMemo } from "react";
import CountryList from "../components/CountryList";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
	const [data, setData] = useState([]);

	const {
		data: fetch,
		isPending,
		error,
	} = useFetch("https://restcountries.com/v3.1/all");

	useEffect(() => {
		if (fetch && fetch !== null) {
			//@ts-ignore
			setData(fetch);
		}
	}, [fetch]);

	return (
		<CountryList data={data} />
		// <main className="flex flex-wrap justify-center gap-10 mx-7">
		// 	{data.map((da, i) => (
		// 		<CountryItem
		// 			key={i}
		// 			id={i}
		// 			name={da.name}
		// 			region={da.region}
		// 			population={da.population}
		// 			capital={da.capital}
		// 			flag={da.flag}
		// 			nativeName={da.nativeName}
		// 			subregion={da.subregion}
		// 			topLevelDomain={da.topLevelDomain}
		// 			currencies={da.currencies}
		// 			langs={da.langs}
		// 			borders={da.borders}
		// 			data={da}
		// 		/>
		// 	))}
		// </main>
	);
};

export default Home;
