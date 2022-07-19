import DropDownMenu from "./DropDownMenu";
import SearchBar from "./SearchBar";

type Props = {
	query: string;
	onQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
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
