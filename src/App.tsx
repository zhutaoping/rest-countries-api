import SearchSection from "./components/SearchSection";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import NoMatch from "./pages/NoMatch";
import { FilterProvider } from "./context/FilterContext";
import Border from "./pages/Border";

function App() {
	return (
		<FilterProvider>
			<SearchSection />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/countries" element={<Countries />} />
				<Route path="/border" element={<Border />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</FilterProvider>
	);
}

export default App;
