import { GridLoader } from "react-spinners";

const Spinner = () => {
	return (
		<div className="absolute left-1/2 top-1/2 -translate-x-1/2">
			<GridLoader className="spinner" color="#36D7B7" />
		</div>
	);
};

export default Spinner;
