import { useFetch } from "../hooks/useFetch";
import CountryList from "../components/CountryList";
import Spinner from "../components/Spinner";

const Home = () => {
	const { data, isPending, error } = useFetch(
		"https://restcountries.com/v3.1/all"
	);

	return (
		<>
			{isPending && <Spinner />}
			{error && (
				<div className="text-white font-bold bg-teal-500 dark:bg-purple-500">
					<h1 className="text-3xl p-4 dark:text-white text-center tracking-wider">
						{error}
					</h1>
				</div>
			)}
			<CountryList data={data} />;
		</>
	);
};

export default Home;
