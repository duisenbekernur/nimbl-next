import { configureStore, Store } from '@reduxjs/toolkit'
import navbarSlice from './features/navbar/navbarSlice'
import filter from './features/rankings-filter/filter'
import videos from './features/videos/videosSlice'
import transitions from './features/transitions/transitions'
import communityFeed from './features/communityFeed/communityFeedSlice'
import communityChat from './features/communityChat/communityChatSlice'

const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        filter:filter,
        videos,
        transitions,
        communityFeed,
        communityChat
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store
