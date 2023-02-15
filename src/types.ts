export type navbarType = {
    id: number
    name: string
    link: string
    isActive: boolean
}

export type ChartZoomSelectionType =
    | 'ALL'
    | 'ONE_YEAR'
    | 'ONE_MONTH'
    | 'ONE_WEEK'
    | 'ONE_DAY'

export type videoCardType = {
    id: number
    title: string
    channel: string
    price: number
    avatar: any
    poster: string
}

export type CommunityFeedMessageType = {
    id: number
    author: {
        name: string
        img: string
    }
    text: string
    img?: string
    likeCount: number
    createdDate: number
}


export enum Emoji {
    CLAPPING_HANDS = '👏',
    THUMBS_UP = '👍',
    FACE_WITH_TEARS_OF_JOY =  '😂',
    FIRE = '🔥'
}

export type CommunityChatMessageType = {
    id: number
    author: {
        name: string
        img: string
    }
    text: string
    img?: string
    react: { emoji: Emoji, reacted: string[] }[]
    createdDate: number
}

export enum ThemeEnum {
    SYSTEM = 'system',
    DARK = 'dark',
    LIGHT = 'light',
}
