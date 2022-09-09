import { useEffect, useState } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useGetRepos = (username = 'pandresvaldivia') => {
	const [data, setData] = useState({
		repos: [],
		isLoading: true,
	});

	useEffect(() => {
		fetch(`${BASE_URL}/${username}/repos`)
			.then((res) => res.json())
			.then((repos) => {
				setData({
					repos,
					isLoading: false,
				});
			});
	}, []);

	return data;
};

export default useGetRepos;
