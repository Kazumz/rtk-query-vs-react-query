import { configureStore } from '@reduxjs/toolkit';
import exampleSlice from './reducers/exampleSlice';
import { initialState } from './initialState';
import { pokemonApi } from './api/pokemonApi';

export const store =
    configureStore({
        preloadedState: initialState,
        reducer: {
            example: exampleSlice,
            [pokemonApi.reducerPath]: pokemonApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(pokemonApi.middleware),
    });

export type RootState = ReturnType<typeof store.getState>;