import SearchSection from "./components/SearchSection";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import NoMatch from "./pages/NoMatch";
import { FilterProvider } from "./context/FilterContext";
import Border from "./pages/Border";
import Header from "./components/Header";
import Details from "./pages/Details";

function App() {
	const location = useLocation();
	const isDetails = location.pathname.includes("details");

	return (
		<FilterProvider>
			<Header />
			{!isDetails && <SearchSection />}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/countries" element={<Countries />} />
				<Route path="/border" element={<Border />} />
				<Route path="/details/:id" element={<Details />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</FilterProvider>
	);
}

export default App;
