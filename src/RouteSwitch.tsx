import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CountryPage from "./routes/CountryPage";
import NoMatch from "./routes/NoMatch";
import Header from "./components/Header";

const RouteSwitch = () => {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/*" element={<App />}></Route>
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouteSwitch;
