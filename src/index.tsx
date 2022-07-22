import ReactDOM from "react-dom/client";
import "./index.scss";
import { ThemeProvider } from "./context/ThemeContext";
import RouteSwitch from "./RouteSwitch";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<ThemeProvider>
		<RouteSwitch />
	</ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
