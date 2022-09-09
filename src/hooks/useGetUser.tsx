import { useEffect, useState } from 'react';
import { User } from '../interfaces/user.interface';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useGetUser = (username: string) => {
	const [data, setData] = useState<useGetUserProps>({
		user: {} as User,
		isLoading: true,
	});

	useEffect(() => {
		fetch(`${BASE_URL}/${username}`)
			.then((res) => res.json())
			.then((user) =>
				setData({
					user,
					isLoading: false,
				})
			);
	}, []);

	return data;
};

type useGetUserProps = {
	user: User;
	isLoading: boolean;
};

export default useGetUser;
