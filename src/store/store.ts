import { configureStore, Store } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import navbarSlice from './features/navbar/navbarSlice'

const store = configureStore({
    reducer: {
        navbar: navbarSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
