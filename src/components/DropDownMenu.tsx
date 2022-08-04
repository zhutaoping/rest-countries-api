import { useRef, useState, useEffect } from "react";
import { useFilter } from "../context/FilterContext";

const DropDownMenu = () => {
	const [menuText, setMenuText] = useState("");
	const dropdownRef = useRef<HTMLDivElement>(null);

	const { filter, setFilter } = useFilter();

	const dropdownMenu = () => {
		if (dropdownRef.current !== null) {
			dropdownRef.current.classList.toggle("hidden");
		}
	};

	useEffect(() => {
		if (filter) setMenuText(filter);
	}, [filter]);

	const handleFilterChange = (e: React.MouseEvent<HTMLButtonElement>) => {
		const filter = e.currentTarget.innerText;
		setFilter!(filter);
	};

	return (
		<div>
			<button
				onClick={dropdownMenu}
				id="dropdownDefault"
				className="w-[152.67px] md:w-[180.3px] md:top-[197px]  mb-7 md:my-0 bg-white dark:text-white dark:bg-elementsDark dark:hover:bg-gray-700  hover:bg-blue-50 focus:outline-none rounded-md text-sm md:text-lg px-4 py-2.5 text-center inline-flex items-center shadow-sm "
				type="button"
			>
				{menuText ? menuText : "Filter by Region"}
				<svg
					className="w-4 h-4 ml-auto"
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
				onClick={dropdownMenu}
				className="hidden absolute top-[220px] z-10 w-[152.67px] md:w-[180.3px] md:top-[197px] bg-white rounded text-gray-900 dark:bg-gray-700"
			>
				<ul
					className="py-1 text-sm md:text-lg text-gray-700 dark:text-gray-200"
					aria-labelledby="dropdownDefault"
				>
					{filter && (
						<li>
							<button onClick={handleFilterChange} className="filter-btn">
								All
							</button>
						</li>
					)}
					<li>
						<button onClick={handleFilterChange} className="filter-btn">
							Africa
						</button>
					</li>
					<li>
						<button onClick={handleFilterChange} className="filter-btn">
							Americas
						</button>
					</li>
					<li>
						<button onClick={handleFilterChange} className="filter-btn">
							Asia
						</button>
					</li>
					<li>
						<button onClick={handleFilterChange} className="filter-btn">
							Europe
						</button>
					</li>
					<li>
						<button onClick={handleFilterChange} className="filter-btn">
							Oceania
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default DropDownMenu;
