import { FC, RefObject, useEffect, useRef } from 'react'
import styles from './CommunityChat.module.scss'
import { RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { reply, smileWhite } from '@/assets/icons'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { formatRelative } from 'date-fns'
import { addReaction } from '@/store/features/communityChat/communityChatSlice'
import { Emoji } from '@/types'
import { useScrollTo } from '@/hooks/useScrollTo'
import CommunityChatInput from './CommunityChatInput'

export const emojiArr: Emoji[] = [
    Emoji.CLAPPING_HANDS,
    Emoji.FACE_WITH_TEARS_OF_JOY,
    Emoji.FIRE,
    Emoji.THUMBS_UP,
]

const CommunityChat: FC = () => {
    const communityChatState = useSelector((store: RootState) =>
        [...store.communityChat].sort((a, b) => a.createdDate - b.createdDate)
    )
    const dispatch = useDispatch()
    const timeNow = useRef(Date.now())
    const scrollRef = useRef<HTMLDivElement>(null);
    const [setShouldScrollTo] = useScrollTo<HTMLDivElement>(scrollRef)

    return (
        <>
            <div style={{ overflowY: 'auto' }} ref={scrollRef}>
                {communityChatState.map((msg) => {
                    return (
                        <div key={msg.id} className={styles.messages_block}>
                            <Image
                                width={53}
                                height={53}
                                className={styles.user_image}
                                src={msg.author.img}
                                alt="user_avatar"
                            />
                            <div className={styles.messages_details}>
                                <div className={styles.messages_header}>
                                    <div className={styles.user_data}>
                                        <div className={styles.username}>
                                            {msg.author.name}
                                        </div>
                                        <div className={styles.submission_date}>
                                            {formatRelative(
                                                msg.createdDate,
                                                timeNow.current
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {msg.img ? (
                                    <Image
                                        width={230}
                                        height={130}
                                        className={styles.message_image}
                                        src={msg.img}
                                        alt="message_image"
                                    />
                                ) : null}
    
                                <p className={`${styles.message}`}>{msg.text}</p>
                                <div className={styles.messages_footer}>
                                    {msg.react.map((react) => {
                                        if (react.reacted.length === 0) return null
                                        return (
                                            <div
                                                key={react.emoji}
                                                className={`${
                                                    styles.messages_react
                                                } ${
                                                    react.reacted.find(
                                                        (user) => user === 'user'
                                                    ) && styles.active_react
                                                }`}
                                                onClick={() =>
                                                    dispatch(
                                                        addReaction({
                                                            emoji: react.emoji,
                                                            id: msg.id,
                                                        })
                                                    )
                                                }
                                            >
                                                <span className={styles.emoji}>
                                                    {react.emoji}
                                                </span>
                                                <span>{react.reacted.length}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={styles.messages_tools}>
                                <div
                                    className={`${styles.tools_item} ${styles.smile}`}
                                >
                                    <ul className={styles.emoji_popper}>
                                        {emojiArr.map((emoji) => {
                                            return (
                                                <li
                                                    key={emoji}
                                                    onClick={() =>
                                                        dispatch(
                                                            addReaction({
                                                                emoji,
                                                                id: msg.id,
                                                            })
                                                        )
                                                    }
                                                >
                                                    {emoji}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <Image
                                        width={20}
                                        height={20}
                                        src={smileWhite}
                                        alt="smile"
                                    />
                                </div>
                                <div className={styles.tools_item}>
                                    <Image
                                        width={20}
                                        height={20}
                                        src={reply}
                                        alt="reply"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <CommunityChatInput setShouldScrollTo={setShouldScrollTo} />
        </>
    )
}

export default CommunityChat
