import { navbarType } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
export interface NavbarState {
    navbarItems: navbarType[]
    marketPlaceNavbar: navbarType[]
}
const initialState: NavbarState = {
    navbarItems: [
        { id: 1, name: 'Content', link: '/' },
        { id: 2, name: 'Community', link: '' },
        { id: 3, name: 'Marketplace', link: '/marketplace' },
        { id: 4, name: 'Settings', link: '' },
    ],
    marketPlaceNavbar: [
        { id: 1, name: 'Rankings', link: '' },
        { id: 2, name: 'Launchpad', link: '' },
        { id: 3, name: 'Opportunities', link: '/marketplace/opportunities' },
        { id: 4, name: 'Gainers & Loosers', link: '' },
    ],
}

const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {},
})

export const {} = navbarSlice.actions

export default navbarSlice.reducer
