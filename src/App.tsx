import React from 'react';
import './App.css';
import FetchByReactQuery from './react-query/FetchByReactQuery';
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query';

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
        <div className="app">
            <h1>RTK Query vs React Query</h1>

            <div className="content">
                <QueryClientProvider client={queryClient.current}>
                    <FetchByReactQuery/>
                </QueryClientProvider>
            </div>
        </div>
    );
}

export default App;
