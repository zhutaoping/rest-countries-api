import DropDownMenu from "./DropDownMenu";
import SearchBar from "./SearchBar";

type Props = {
	query: string;
	onQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	onFilter: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SearchSection = ({ query, onQuery, onSubmit, onFilter }: Props) => {
	return (
		<section
			role="search"
			className="mx-7 my-2 bg-bgLight dark:bg-bgDark md:flex md:items-center md:mx-28 md:my-7 md:justify-between 
			"
		>
			<SearchBar query={query} onQuery={onQuery} onSubmit={onSubmit} />
			<DropDownMenu onFilter={onFilter} />
		</section>
	);
};

export default SearchSection;
