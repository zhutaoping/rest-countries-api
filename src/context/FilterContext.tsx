import React, {
	useState,
	createContext,
	useContext,
	Dispatch,
	SetStateAction,
} from "react";

type Props = {
	children: React.ReactNode;
};

type Context = {
	filter?: string;
	setFilter?: Dispatch<SetStateAction<string>>;
	handleFilter?: () => void;
};

const FilterContext = createContext<Context>({});

export function useFilter() {
	return useContext(FilterContext);
}

export const FilterProvider = ({ children }: Props) => {
	const [filter, setFilter] = useState("");

	const handleFilter = () => {
		console.log(filter);
	};

	const value = { filter, setFilter, handleFilter };

	return (
		<FilterContext.Provider value={value}>{children}</FilterContext.Provider>
	);
};
