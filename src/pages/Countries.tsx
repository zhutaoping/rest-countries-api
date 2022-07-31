import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import CountryList from "../components/CountryList";

const Countries = () => {
	const { state }: any = useLocation();

	const { data, isPending, error } = useFetch(
		`https://restcountries.com/v3.1/name/${state}`
	);
	console.log(data);

	return (
		<div>
			<CountryList data={data} />
		</div>
	);
};

export default Countries;
