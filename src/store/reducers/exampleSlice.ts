import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '../initialState';

export interface ExampleState {
    token: string | null
}

const slice = createSlice({
    name: 'example',
    initialState: initialState.example,
    reducers: {
        setToken: (
            state,
            {
                payload: { token },
            }: PayloadAction<{ token: string }>,
        ) => {
            state.token = token
        },
    },
})

export const { setToken } = slice.actions

export default slice.reducer
