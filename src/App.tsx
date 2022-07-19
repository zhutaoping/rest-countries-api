import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import Main from "./components/Main";
import { ThemeProvider } from "./context/ThemeContext";
import { useState } from "react";

function App() {
	const [query, setQuery] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();

		setQuery("");
	};

	return (
		<ThemeProvider>
			<Header />
			<SearchSection
				query={query}
				onQuery={(e: any) => setQuery(e.target.value)}
				onSubmit={(e: any) => handleSubmit(e)}
			/>
			<Main query={query} />
		</ThemeProvider>
	);
}

export default App;
