type Props = {
	error: string;
};

const Error = ({ error }: Props) => {
	return (
		<div className="px-10 py-5 dark:bg-elementsDark w-fit mx-auto shadow-md">
			<h1 className="text-3xl dark:text-white">{error}</h1>
		</div>
	);
};

export default Error;
