import DropDownMenu from "./DropDownMenu";
import SearchBar from "./SearchBar";

type Props = {
	query: string;
	onQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
};

const SearchSection = ({ query, onQuery, onSubmit }: Props) => {
	return (
		<section
			role="search"
			className="w-4/5 mx-10 my-2 bg-bgLight dark:bg-bgDark md:w-4/5 md:flex md:items-center  md:my-7 md:justify-between md:mx-auto 
			"
		>
			<SearchBar query={query} onQuery={onQuery} onSubmit={onSubmit} />
			<DropDownMenu />
		</section>
	);
};

export default SearchSection;
