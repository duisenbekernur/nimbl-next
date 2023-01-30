import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isPlaying: false,
}

const prevVideoSlice = createSlice({
    name: 'prevVideo',
    initialState,
    reducers: {
        openPlaying: (state) => {
            state.isPlaying = true
        },
        closePlaying: (state) => {
            state.isPlaying = false
        },
    },
})

export const { openPlaying, closePlaying } = prevVideoSlice.actions

export default prevVideoSlice.reducer
