import DropDownMenu from "./DropDownMenu";
import SearchBar from "./SearchBar";

const SearchSection = () => {
	return (
		<section
			role="search"
			className="mx-7 my-2 bg-bgLight dark:bg-bgDark md:flex md:items-center md:mx-28 md:my-7 md:justify-between 
			"
		>
			<SearchBar />
			<DropDownMenu />
		</section>
	);
};

export default SearchSection;
