import Repolist from './components/molecules/Repolist';
import Filters from './components/organisms/Filters';
import Layout from './components/organisms/Layout';
import Profile from './components/organisms/Profile';
import Search from './components/organisms/Search';
import AppProvider from './contexts/App.context';

const App = () => {
	return (
		<AppProvider>
			<Layout>
				<Profile />
				<Search />
				<Filters />
				<Repolist />
			</Layout>
		</AppProvider>
	);
};

export default App;
