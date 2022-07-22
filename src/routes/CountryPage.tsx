import { useLocation, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Header from "../components/Header";
import { State } from "../App";
import { countryListAlpha3 } from "../data/listAlpha3";

const CountryPage = () => {
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
		console.log(newArr);
	}

	return (
		<div className="text-white">
			<Header />
			<button onClick={() => navigate(-1)} className="nav-btn ml-[7vw]">
				<BsArrowLeft className="block text-xl" />
				Back
			</button>
			<main className="text-black dark:text-pureWhite mt-14 flex flex-col mx-auto w-[85vw] ">
				<img
					src={state.flag}
					alt={state.name}
					className="shadow-lg max-w-2xl"
				/>
				<section className="mt-5 leading-9">
					<h1 className="text-2xl font-bold my-5">{state.name}</h1>
					<p>
						<span className="font-semibold">Native Name: </span>
						{state.nativeName}
					</p>
					<p>
						<span className="font-semibold">Population: </span>
						{state.population}
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

				<section className="mt-10 leading-9">
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
					<section className="mt-10 mb-20">
						<h2 className="mb-5 text-xl font-semibold">Border Countries:</h2>
						<div className="flex flex-wrap gap-4">
							{newArr.map((el, i) => (
								<button key={i} className="nav-btn m-0 mb-1">
									{el}
								</button>
							))}
						</div>
					</section>
				)}
			</main>
		</div>
	);
};

export default CountryPage;
