import { FaRegMoon, FaSun } from "react-icons/fa"; // light mode
import { useTheme } from "../context/ThemeContext";

const Header = () => {
	const { darkMode, handleTheme } = useTheme();

	return (
		<header className="header  py-8 flex justify-evenly md:justify-between md:px-20 lg:px-40 items-center dark:bg-elementsDark text-textLight dark:text-white drop-shadow">
			<h1 className="m-0 text-base md:text-2xl font-bold">
				Where in the World?
			</h1>

			<span className="flex items-center text-sm md:text-xl">
				{darkMode ? (
					<FaSun onClick={handleTheme} className="mr-2 text-lg" />
				) : (
					<FaRegMoon onClick={handleTheme} className="mr-2 text-lg" />
				)}
				{darkMode ? "Light Mode" : "Dark Mode"}
			</span>
		</header>
	);
};

export default Header;
