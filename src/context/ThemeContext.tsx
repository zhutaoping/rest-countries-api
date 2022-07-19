import React, {
	useState,
	useEffect,
	createContext,
	useContext,
	Dispatch,
	SetStateAction,
} from "react";

type Props = {
	children: React.ReactNode;
};

type Context = {
	darkMode?: boolean;
	setDarkMode?: Dispatch<SetStateAction<boolean>>;
	handleTheme?: () => void;
};

const ThemeContext = createContext<Context>({});

export function useTheme() {
	return useContext(ThemeContext);
}
export const ThemeProvider = ({ children }: Props) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const currTheme = localStorage.getItem("theme");
		if (currTheme === "dark") {
			setDarkMode(true);
			document.documentElement.classList.replace("light", "dark");
		} else {
			setDarkMode(false);
			document.documentElement.classList.replace("dark", "light");
		}
	}, []);

	function handleTheme() {
		setDarkMode((prevState) => {
			const bool = !prevState;
			changeTheme(bool);
			return bool;
		});
	}

	function changeTheme(bool: boolean) {
		if (bool) {
			document.documentElement.classList.replace("light", "dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.replace("dark", "light");
			localStorage.setItem("theme", "light");
		}
	}

	const value = { darkMode, handleTheme };

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
