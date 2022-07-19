import { State } from "../App";

const CountryItem = ({ name, region, population, capital, flag }: State) => {
	return (
		<div className="">
			<div className="max-w-sm rounded overflow-hidden shadow-lg ">
				<img className="object-contain" src={flag} alt="country flag" />
				<div className=" p-7 dark:text-pureWhite dark:bg-elementsDark text-gray-700 w-[320px]">
					<h2 className="font-bold text-xl mb-3">{name}</h2>
					<p className="dark:text-pureWhite mb-1">
						<span className="font-semibold">Population</span>:{" "}
						{population.toLocaleString()}
					</p>
					<p className="dark:text-pureWhite mb-1">
						<span className="font-semibold">Region</span>: {region}
					</p>
					<p className="dark:text-pureWhite mb-1">
						<span className="font-semibold">Capital</span>: {capital}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CountryItem;
