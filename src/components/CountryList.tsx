import CountryItem from "./CountryItem";
import { State } from "../hooks/useFetch";

type Props = {
	data: State[];
};

const CountryList = ({ data }: Props) => {
	// console.log(data);
	return (
		<main className="flex flex-wrap justify-center gap-10 mx-7">
			{data.map((da, i) => (
				<CountryItem
					key={i}
					id={i}
					name={da.name}
					region={da.region}
					population={da.population}
					capital={da.capital}
					flag={da.flag}
					nativeName={da.nativeName}
					subregion={da.subregion}
					topLevelDomain={da.topLevelDomain}
					currencies={da.currencies}
					langs={da.langs}
					borders={da.borders}
					data={da}
				/>
			))}
		</main>
	);
};

export default CountryList;
