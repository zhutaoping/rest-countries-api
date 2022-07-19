import DropDownMenu from "./DropDownMenu";
import SearchBar from "./SearchBar";

type Props = {
	query: string;
	onQuery: (e: any) => void;
	onSubmit: (e: any) => void;
};

const SearchSection = ({ query, onQuery, onSubmit }: Props) => {
	return (
		<section role="search" className="my-2 bg-bgLight dark:bg-bgDark">
			<SearchBar query={query} onQuery={onQuery} onSubmit={onSubmit} />
			<DropDownMenu />
		</section>
	);
};

export default SearchSection;
