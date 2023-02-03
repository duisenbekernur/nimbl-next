import { CommunityFeedMessageType } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs'

const initialState: CommunityFeedMessageType[] = [
    {
        id: 1,
        author: {
            name: 'VinGaming',
            img: '/usersImg/user10.png',
        },
        text: 'It is buyin time!',
        img: '/fakeImg/video-14.jpg',
        likeCount: 158,
        createdDate: new Date(Date.now() - (2* 60 * 60 * 1000)), // 2h ago
    },
    {
        id: 2,
        author: {
            name: '@BlueWard2',
            img: '/usersImg/user11.png',
        },
        text: 'Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.',
        likeCount: 505,
        createdDate: new Date(Date.now() - (4* 60 * 60 * 1000)), // 4h ago,
    },
    {
        id: 3,
        author: {
            name: 'VinGaming',
            img: '/usersImg/user12.png',
        },
        text: 'Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market, any pointers on how to make substantial progress in earning? would be appreciated.',
        likeCount: 1205,
        createdDate: new Date(Date.now() - (5 * 60 * 60 * 1000)), // 5h ago,
    },
    {
        id: 4,
        author: {
            name: 'Alkimax',
            img: '/usersImg/user1.png',
        },
        text: 'Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market, any pointers on how to make substantial progress in earning? would be appreciated. Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market',
        likeCount: 2500,
        createdDate: new Date('2023-01-26'),
    },
]

const navbarSlice = createSlice({
    name: 'communityFeed',
    initialState,
    reducers: {
        addMessage: (state, { payload } : {payload: CommunityFeedMessageType}) => {
           state.push(payload)
        },
        resetState: () => initialState
    },
})

export const { addMessage, resetState } = navbarSlice.actions

export default navbarSlice.reducer
