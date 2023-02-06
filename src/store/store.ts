import { configureStore, Store } from '@reduxjs/toolkit'
import navbarSlice from './features/navbar/navbarSlice'
import filter from './features/rankings-filter/filter'
import videos from './features/videos/videosSlice'
<<<<<<< HEAD
import transitions from './features/transitions/transitions'
=======
import communityFeed from './features/communityFeed/communityFeedSlice'
import communityChat from './features/communityChat/communityChatSlice'

>>>>>>> develop

const store = configureStore({
    reducer: {
        navbar: navbarSlice,
<<<<<<< HEAD
        filter: filter,
        videos,
        transitions,
    },
=======
        filter:filter,
        videos,
        communityFeed,
        communityChat
    }
>>>>>>> develop
})

export type RootState = ReturnType<typeof store.getState>
export default store
