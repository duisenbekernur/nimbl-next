import { configureStore, Store } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import navbarSlice from './features/navbar/navbarSlice'
import filter from './features/rankings-filter/filter'
import videos from './features/videos/videosSlice'
import communityFeed from './features/communityFeed/communityFeedSlice'


const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        filter:filter,
        videos,
        communityFeed 

    },
})

export type RootState = ReturnType<typeof store.getState>
export default store
