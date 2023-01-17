import { configureStore, Store } from '@reduxjs/toolkit'
import navbarSlice from './features/navbar/navbarSlice'

const store = configureStore({
    reducer: {
        navbar: navbarSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export default store
