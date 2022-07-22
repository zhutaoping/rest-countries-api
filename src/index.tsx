import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryPage from "./routes/CountryPage";
import { ThemeProvider } from "./context/ThemeContext";
import NoMatch from "./routes/NoMatch";
import CountryList from "./components/CountryList";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<ThemeProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}></Route>
				<Route path="/countrypage/:name" element={<CountryPage />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</BrowserRouter>
	</ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
