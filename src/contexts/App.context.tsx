import { createContext, ReactNode, useContext } from 'react';
import useGetUser from '../hooks/useGetUser';
import { User } from '../interfaces/user.interface';
import useGetRepos from '../hooks/useGetRepos';
import { Repo } from '../interfaces/repo.interface';

const AppContext = createContext({} as AppContextProps);

const AppProvider = ({ children }: AppProviderProps) => {
	const { user, isLoading: isUserLoading } = useGetUser('pandresvaldivia');
	const { repos, isLoading: isReposLoading } = useGetRepos();

	const isLoading = isUserLoading || isReposLoading;

	const context = {
		user,
		repos,
		isLoading,
	};

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

type AppContextProps = {
	user: User;
	repos: Repo[];
	isLoading: boolean;
};

type AppProviderProps = {
	children: ReactNode;
};

export default AppProvider;
