import { FaRegMoon, FaSun } from "react-icons/fa"; // light mode
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const { darkMode, handleTheme } = useTheme();

	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/");
		window.location.reload();
	};

	return (
		<header className="header py-8 flex justify-around md:justify-between md:px-20 lg:px-40 items-center dark:bg-elementsDark text-textLight dark:text-white drop-shadow">
			<h1
				onClick={handleClick}
				className="m-0 text-base md:text-2xl font-bold cursor-pointer"
				title="Home Page"
			>
				Where in the World?
			</h1>
			<span className="flex items-center text-sm md:text-xl">
				{darkMode ? (
					<FaSun
						onClick={handleTheme}
						className="mr-2 md:text-2xl cursor-pointer"
					/>
				) : (
					<FaRegMoon
						onClick={handleTheme}
						className="mr-2 md:text-2xl cursor-pointer"
					/>
				)}
				{darkMode ? "Light Mode" : "Dark Mode"}
			</span>
		</header>
	);
};

export default Header;
