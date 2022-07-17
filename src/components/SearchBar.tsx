const SearchBar = () => {
	return (
		<form className="flex items-center py-4 w-[90vw] mx-auto">
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
							fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"
						></path>
					</svg>
				</div>
				<input
					type="text"
					id="simple-search"
					className="bg-white-50 border-0 text-gray-900 text-sm rounded-md focus:ring-gray-100 focus:border-gray-100 shadow-sm block w-full pl-10 p-2.5  dark:bg-elementsDark dark:placeholder-white dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
					placeholder="Search for a country..."
					required
				/>
			</div>
		</form>
	);
};

export default SearchBar;
