import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../src/App";
import NoMatch from "../src/pages/NoMatch";
import Header from "../src/components/Header";

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
