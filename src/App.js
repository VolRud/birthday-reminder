import React from 'react';
import './App.scss';
import Calendar from './Calendar/Calendar';
import { store } from './store';
import { Provider } from 'react-redux';
import EventsList from './EventsContainer/EventsList';
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient();
// dev
window.store = store;

function App() {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Calendar />
				<EventsList />
			</QueryClientProvider>
		</Provider>
	);
}

export default App;
