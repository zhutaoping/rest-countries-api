import { Link } from "react-router-dom";
import { State } from "../../temp/useFetch";

type Props = State & { data: object } & { id: number };

const CountryItem = ({
	name,
	region,
	population,
	capital,
	flag,
	data,
	id,
}: Props) => {
	return (
		<div>
			<Link to={`/details/${id}`} state={data} title="Details Page">
				<div className="max-w-sm rounded overflow-hidden shadow-lg ">
					<img src={flag} alt="country flag" />
					<div className=" p-7 dark:text-white dark:bg-elementsDark text-gray-700">
						<h2 className="font-bold text-xl mb-3">{name}</h2>
						<p className="dark:text-white mb-1">
							<span className="font-semibold">Population</span>:{" "}
							{population.toLocaleString()}
						</p>
						<p className="dark:text-white mb-1">
							<span className="font-semibold">Region</span>: {region}
						</p>
						<p className="dark:text-white mb-1">
							<span className="font-semibold">Capital</span>: {capital}
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CountryItem;
