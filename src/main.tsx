import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyleStyled from './components/settings/global-styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyleStyled />
		<App />
	</React.StrictMode>
);
