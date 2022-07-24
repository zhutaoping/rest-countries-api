import { useRef } from "react";

type Props = {
	onFilter: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const DropDownMenu = ({ onFilter }: Props) => {
	const dropdownRef = useRef<HTMLDivElement>(null);

	const dropdownMenu = () => {
		if (dropdownRef.current !== null) {
			dropdownRef.current.classList.toggle("hidden");
		}
	};

	return (
		<div>
			<button
				onClick={dropdownMenu}
				id="dropdownDefault"
				className=" mb-7 md:my-0 bg-white dark:text-pureWhite dark:bg-elementsDark dark:hover:bg-gray-700 focus:outline-none rounded-md text-sm md:text-lg px-4 py-2.5 text-center inline-flex items-center shadow-sm hover:bg-gray-100"
				type="button"
			>
				Filter by Region
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
				onClick={dropdownMenu}
				className="hidden absolute top-[220px] md:top-[197px] z-10 w-[165.86px] md:w-[197px] bg-white rounded text-gray-900 dark:bg-gray-700"
			>
				<ul
					className="py-1 text-sm md:text-lg text-gray-700 dark:text-gray-200"
					aria-labelledby="dropdownDefault"
				>
					<li>
						<button onClick={onFilter} className="filter-btn">
							Africa
						</button>
					</li>
					<li>
						<button onClick={onFilter} className="filter-btn">
							Americas
						</button>
					</li>
					<li>
						<button onClick={onFilter} className="filter-btn">
							Asia
						</button>
					</li>
					<li>
						<button onClick={onFilter} className="filter-btn">
							Europe
						</button>
					</li>
					<li>
						<button onClick={onFilter} className="filter-btn">
							Oceania
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default DropDownMenu;
