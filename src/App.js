import React from 'react';
import './App.scss';
import { store } from './store';
import { Provider } from 'react-redux';
import { RootComponent } from './components/RootComponent';
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<Provider store={store}>
      
			<QueryClientProvider client={queryClient}>
				<RootComponent />
			</QueryClientProvider>
		</Provider>
	);
}

export default App;
