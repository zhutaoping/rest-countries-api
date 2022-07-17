import { FaMoon } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa"; //

const Header = () => {
	return (
		<header className="px-3 py-8 flex justify-between items-center bg-white-100 dark:bg-elementsDark text-textLight dark:text-white shadow">
			<h1 className="m-0 text-base font-bold">Where in the World?</h1>

			<span className="flex items-center text-sm">
				<FaMoon className="mr-3 " />
				Dark Mode
			</span>
		</header>
	);
};

export default Header;
