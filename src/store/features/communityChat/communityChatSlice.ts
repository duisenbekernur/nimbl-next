import { CommunityChatMessageType, Emoji } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs'

const initialState: CommunityChatMessageType[] = [
    {
        id: 1,
        author: {
            name: 'Akie',
            img: '/usersImg/user10.png',
        },
        text: 'Hahaha. Don’t worry mate he’s figuringit out. He’s getting confused too',
        react: [
            { emoji: Emoji.FACE_WITH_TEARS_OF_JOY, reacted: [...Array(20)] },
        ],
        createdDate: new Date(Date.now() - 5 * 60 * 1000).getTime(), // 5m ago
    },
    {
        id: 2,
        author: {
            name: 'Den',
            img: '/usersImg/user2.png',
        },
        text: 'reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market, any pointers on how to make substantial progress in earning? would be appreciated.',
        react: [
            { emoji: Emoji.CLAPPING_HANDS, reacted: [...Array(11)] },
        ],
        createdDate: new Date(Date.now() - 10 * 60 * 1000).getTime(), // 10m ago
    },
    {
        id: 3,
        author: {
            name: 'Ezekiel',
            img: '/usersImg/user3.png',
        },
        text: 'Hahaha. Don’t worry mate he’s figuringit out. He’s getting confused too',
        react: [
            { emoji: Emoji.FACE_WITH_TEARS_OF_JOY, reacted: [...Array(20)] },
        ],
        createdDate: new Date(Date.now() - 21 * 60 * 1000).getTime(), // 21m ago
    },
    {
        id: 4,
        author: {
            name: 'Mikey',
            img: '/usersImg/user4.png',
        },
        text: "very soon #Iguverse whitelist, don't miss it, there is simply no better NFT, a new era where the very creativity of users is important.  artificial intelligence",
        react: [],
        createdDate: new Date(Date.now() - 25 * 60 * 60 * 1000).getTime(), // 5h ago
    },
    {
        id: 5,
        author: {
            name: 'NotCrypto',
            img: '/usersImg/user5.png',
        },
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to',
        react: [
            { emoji: Emoji.FACE_WITH_TEARS_OF_JOY, reacted: [...Array(20)] },
            { emoji: Emoji.THUMBS_UP, reacted: [...Array(38), 'user'] },
            { emoji: Emoji.FIRE, reacted: [...Array(5), 'user'] }
        ],
        createdDate: new Date(Date.now() - 27 * 60 * 60 * 1000).getTime(), // 7h ago
    },
]

const CommunityChatSlice = createSlice({
    name: 'communityChat',
    initialState,
    reducers: {
        addMessage: (
            state,
            { payload }: { payload: CommunityChatMessageType }
        ) => {
            state.push(payload)
        },
        addReaction: (state, {payload}) => {
            const msgIdx = state.findIndex(({ id }) => id === payload.id)
            for (const reaction of state[msgIdx].react) {
                // Check if this emoji has been used when the current user reacted to the message.
                if(reaction.emoji === payload.emoji && reaction.reacted.includes('user')) {
                    reaction.reacted = reaction.reacted.filter(user => user !== 'user')
                    return

                // Check if this emoji has been used by other users.
                } else if(reaction.emoji === payload.emoji) {
                    reaction.reacted.push('user')
                    return
                
                } 
            }
            // the first use of a emoji in the message
            state[msgIdx].react.push({emoji: payload.emoji, reacted: ['user']})

        },
        resetState: () => initialState,
    },
})

export const { addMessage, resetState, addReaction } = CommunityChatSlice.actions

export default CommunityChatSlice.reducer
