import React from 'react';
import './App.css';
import FetchByReactQuery from './react-query/FetchByReactQuery';
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query';
import { store } from './store/store';
import { Provider } from 'react-redux';
import FetchByRTKQuery from './rtk-query/FetchByRTKQuery';

const App: React.FC = () => {
    const queryClient = React.useRef(
        new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60000,
                        refetchOnWindowFocus: false
                    }
                }
            }
        ));

    return (
        <Provider store={store}>
            <div className="app">
                <h1>RTK Query vs React Query</h1>

                <div className="content">
                    <QueryClientProvider client={queryClient.current}>
                        <FetchByReactQuery/>
                    </QueryClientProvider>
                    
                    <FetchByRTKQuery />
                </div>
            </div>
        </Provider>
    );
}

export default App;
