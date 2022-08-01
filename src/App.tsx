import SearchSection from "./components/SearchSection";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Details from "./pages/Details";
import Countries from "./pages/Countries";
import NoMatch from "./pages/NoMatch";

function App() {
	const location = useLocation();

	let isDetails = false;
	isDetails = location.pathname.includes("details");

	return (
		<>
			<Header />
			{isDetails || <SearchSection />}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/countries" element={<Countries />} />
				<Route path="/details/:id" element={<Details />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</>
	);
}

export default App;
