import SearchSection from "./components/SearchSection";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Spinner from "./components/Spinner";
import Home from "./pages/Home";
import Header from "./components/Header";
import Details from "./pages/Details";
import Countries from "./pages/Countries";

// export interface State {
// 	name: string;
// 	region: string;
// 	population: number;
// 	capital: string;
// 	flag: string;
// 	nativeName: string;
// 	subregion: string;
// 	topLevelDomain: string;
// 	currencies: string;
// 	langs: string;
// 	borders: string[];
// }

function App() {
	// const [query, setQuery] = useState("");
	// const [data, setData] = useState<State[]>([]);
	// const [border, setBorder] = useState<State[]>([]);
	// const [filtered, setFiltered] = useState<State[]>([]);
	// const [queryList, setQueryList] = useState<State[]>([]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState("");

	// const navigate = useNavigate();
	// const location = useLocation();

	// useEffect(() => {
	// 	handleGetData("");
	// }, []);

	let isAlpha3 = false;
	let isBorder = false;
	let isQueryList = false;
	let isDetails = false;

	// const handleGetData = async (query: string) => {
	// 	setIsLoading(true);
	// 	let url;

	// 	if (query.length === 0) {
	// 		url = "https://restcountries.com/v3.1/all";
	// 	} else if (isAlpha3) {
	// 		url = `https://restcountries.com/v3.1/alpha/${query}`;
	// 		isAlpha3 = false;
	// 	} else {
	// 		url = `https://restcountries.com/v3.1/name/${query}`;
	// 	}

	// 	try {
	// 		const res = await fetch(url);

	// 		if (!res.ok) {
	// 			throw new TypeError(res.statusText);
	// 		}

	// 		const json = await res.json();

	// 		for (let js of json) {
	// 			interface LooseObject {
	// 				[key: string]: string;
	// 			}

	// 			let nativeName: string;
	// 			if (js.name.nativeName) {
	// 				nativeName = Object.values<LooseObject>(js.name.nativeName)[0].common;
	// 			} else {
	// 				nativeName = "n/a";
	// 			}

	// 			let langs: string;
	// 			if (js.languages) {
	// 				let arr = [];
	// 				for (let key in js.languages) {
	// 					arr.push(js.languages[key]);
	// 				}
	// 				langs = arr.join(", ");
	// 			} else {
	// 				langs = "n/a";
	// 			}

	// 			const currencies = js.currencies
	// 				? Object.keys(js.currencies)[0]
	// 				: "n/a";

	// 			const tld = js.tld ? js.tld[0] : "n/a";

	// 			const temp = {
	// 				name: js.name.common,
	// 				region: js.region,
	// 				population: js.population,
	// 				capital: js.capital || "n/a",
	// 				flag: js.flags.svg,
	// 				nativeName: nativeName,
	// 				subregion: js.subregion || "n/a",
	// 				topLevelDomain: tld,
	// 				currencies: currencies,
	// 				langs: langs,
	// 				borders: js.borders,
	// 			};

	// 			if (isBorder) {
	// 				setBorder((prevData) => [...prevData, temp]);
	// 				isBorder = false;
	// 			} else if (isQueryList) {
	// 				setQueryList((prevData) => [...prevData, temp]);
	// 			} else {
	// 				// setData((prevData) => [...prevData, temp]);
	// 			}
	// 		}
	// 		setError("");
	// 		setIsLoading(false);
	// 		isQueryList = false;
	// 	} catch (e) {
	// 		setIsLoading(false);
	// 		setError("無法取回資料");

	// 		if (e instanceof TypeError) {
	// 			console.log(e.message);
	// 		}
	// 	}
	// };

	// const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setQuery(e.target.value);
	// };

	// const handleSubmit = (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	isQueryList = true;
	// 	handleGetData(query);
	// 	setQuery("");
	// 	navigate("querylist", { state: queryList });
	// 	setQueryList([]);
	// };

	// const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	isAlpha3 = true;
	// 	isBorder = true;
	// 	const query = e.currentTarget.value;
	// 	handleGetData(query);
	// 	navigate("border", { state: border });
	// 	setBorder([]);
	// };

	// const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	const filter = e.currentTarget.textContent;
	// 	const bool = location.pathname.includes("querylist");

	// 	let filteredData: State[] = [];
	// 	filteredData = (bool ? queryList : data).filter(
	// 		(el) => el.region === filter
	// 	);
	// 	setFiltered(filteredData);

	// 	navigate(bool ? `/querylist/${filter}` : `/region/${filter}`, {
	// 		state: filtered,
	// 	});
	// };
	// isDetails = location.pathname.includes("details");

	return (
		<BrowserRouter>
			<Header />
			<SearchSection />
			{/* {isLoading && <Spinner />} */}
			{/* {error && <Error error={error} />} */}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/countries" element={<Countries />} />
				<Route path="/details/:id" element={<Details />} />
				{/* <Route path="/border" element={<CountryList data={border} />} />
				<Route path="/querylist" element={<CountryList data={queryList} />} />
				<Route
					path="/region/:filter"
					element={<CountryList data={filtered} />}
				/>
				<Route
					path="/querylist/:filter"
					element={<CountryList data={filtered} />}
				/>
				<Route
					path="/details/:name"
					element={<DetailsPage onClick={handleClick} />}
				/> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
