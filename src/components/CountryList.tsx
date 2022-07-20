import CountryItem from "./CountryItem";
import { State } from "../App";

type Props = {
	data: State[];
};

const CountryList = ({ data }: Props) => {
	return (
		<main className="flex gap-10 md:gap-20 flex-wrap justify-center ">
			{data.map((da, i) => (
				<CountryItem
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

export default CountryList;