type Props = {
	query: string;
	onQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
};

const SearchBar = ({ query, onQuery, onSubmit }: Props) => {
	return (
		<form
			onSubmit={onSubmit}
			action="submit"
			autoComplete="off"
			className="flex items-center py-4 mb-2 "
		>
			<label htmlFor="simple-search" className="sr-only">
				Search
			</label>
			<div className="relative w-full">
				<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-gray-500 dark:text-gray-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clipRule="evenodd"
						></path>
					</svg>
				</div>
				<input
					value={query}
					onChange={onQuery}
					type="text"
					id="simple-search"
					className="border-0 dark:bg-elementsDark text-gray-900 text-sm md:text-lg rounded-md shadow-sm w-full max-w-[400px] pl-10 p-2.5 placeholder-gray-900 hover:bg-gray-100 focus:ring-gray-200 dark:placeholder-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-500"
					placeholder="Search for a country..."
					required
				/>
			</div>
		</form>
	);
};

export default SearchBar;
