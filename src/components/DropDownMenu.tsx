import { useRef } from "react";

const DropDownMenu = () => {
	const dropdownRef = useRef<HTMLDivElement>(null);

	const dropdownMenu = () => {
		if (null !== dropdownRef.current) {
			dropdownRef.current.classList.toggle("hidden");
		}
	};

	return (
		<div>
			<button
				onClick={dropdownMenu}
				id="dropdownDefault"
				className="ml-6 mb-7 bg-white dark:text-pureWhite dark:bg-elementsDark dark:hover:bg-gray-700 focus:outline-none rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center shadow-sm "
				type="button"
			>
				Dropdown button{" "}
				<svg
					className="ml-2 w-4 h-4"
					aria-hidden="true"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
			<div
				data-dropdown
				id="dropdown"
				ref={dropdownRef}
				className="hidden absolute top-[222px] ml-6 z-10 w-[165.86px] bg-white rounded text-gray-900 dark:bg-gray-700"
			>
				<ul
					className="py-1 text-sm  text-gray-700 dark:text-gray-200"
					aria-labelledby="dropdownDefault"
				>
					<li>
						<button className="filter-btn">Africa</button>
					</li>
					<li>
						<button className="filter-btn">America</button>
					</li>
					<li>
						<button className="filter-btn">Asia</button>
					</li>
					<li>
						<button className="filter-btn">Europe</button>
					</li>
					<li>
						<button className="filter-btn">Oceania</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default DropDownMenu;
