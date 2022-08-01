import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import CountryList from "../components/CountryList";
import Spinner from "../components/Spinner";

const Countries = () => {
	const { state }: any = useLocation();

	const { data, isPending, error } = useFetch(
		`https://restcountries.com/v3.1/name/${state}`
	);

	return (
		<div>
			{isPending && <Spinner />}
			{error && (
				<h1 className="text-2xl text-center dark:text-white">{error}</h1>
			)}
			<CountryList data={data} />
		</div>
	);
};

export default Countries;
