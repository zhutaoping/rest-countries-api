import { useLocation, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { State } from "./useFetch";
import { countryListAlpha3 } from "../src/data/listAlpha3";

type Props = {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const DetailsPage = ({ onClick }: Props) => {
	const location = useLocation();
	const state = location.state as State;

	const navigate = useNavigate();

	const bordersArr = state.borders;
	let newArr: string[] = [];

	if (bordersArr) {
		newArr = bordersArr.map((el) => {
			const key = el.toUpperCase();
			return countryListAlpha3[key as keyof typeof countryListAlpha3];
		});
	}

	const handleBackBtn = () => {
		navigate(-1);
	};

	return (
		<div className="text-white">
			<button onClick={handleBackBtn} className="nav-btn ml-[7vw]">
				<BsArrowLeft className="block text-xl" />
				Back
			</button>
			<main className="text-black dark:text-pureWhite mt-14 flex flex-col mx-auto w-[85vw] md:flex-row md:items-start md:gap-20 lg:grid lg:grid-cols-2 lg:gap-32">
				<img
					src={state.flag}
					alt={state.name}
					className="shadow-xl max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-2xl"
				/>

				<div className="wrapper my-10 md:mt-0 lg:grid lg:grid-cols-2 lg:gap-x-10">
					<section className="leading-9">
						<h1 className="text-2xl font-bold mb-5">{state.name}</h1>
						<p>
							<span className="font-semibold ">Native Name: </span>
							{state.nativeName}
						</p>
						<p>
							<span className="font-semibold">Population: </span>
							{state.population.toLocaleString()}
						</p>
						<p>
							<span className="font-semibold">Region: </span> {state.region}
						</p>
						<p>
							<span className="font-semibold">Sub Region: </span>
							{state.subregion}
						</p>
						<p>
							<span className="font-semibold">Capital: </span>
							{state.capital}
						</p>
					</section>

					<section className="mt-10 leading-9 ">
						<p>
							<span className="font-semibold">Top Level Domain: </span>
							{state.topLevelDomain}
						</p>
						<p>
							<span className="font-semibold">Currencies: </span>
							{state.currencies}
						</p>
						<p>
							<span className="font-semibold">Languages: </span>
							{state.langs}
						</p>
					</section>

					{bordersArr && (
						<section className="mt-10 mb-20 lg:col-span-2">
							<h2 className="mb-5 text-xl font-semibold">Border Countries:</h2>
							<div className="flex flex-wrap gap-4">
								{newArr.map((el, i) => (
									<button
										onClick={onClick}
										key={i}
										value={bordersArr[i]}
										className="nav-btn m-0 mb-1"
									>
										{el}
									</button>
								))}
							</div>
						</section>
					)}
				</div>
			</main>
		</div>
	);
};

export default DetailsPage;
