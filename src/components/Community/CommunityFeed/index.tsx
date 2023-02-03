import { FC, useEffect } from 'react'
import styles from './CommunityFeed.module.scss'
import { formatDistance, formatDistanceStrict } from 'date-fns'
import { RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { likeRegular } from '@/assets/icons'
import {
    addMessage,
    resetState,
} from '@/store/features/communityFeed/communityFeedSlice'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const CommunityFeed: FC = () => {
    const communityFeedState = useSelector((store: RootState) =>
        [...store.communityFeed].sort(
            (a, b) => b.createdDate - a.createdDate
        )
    )
    const dispatch = useDispatch()

    useEffect(() => {
        let timerId: NodeJS.Timeout | null = null
        new Promise((resolve, reject) => {
            timerId = setTimeout(() => {
                resolve(6)
                dispatch(
                    addMessage({
                        id: 5,
                        author: {
                            name: 'NotCrypto',
                            img: '/usersImg/user3.png',
                        },
                        text: 'Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market, any pointers on how to make substantial progress in earning? would be appreciated. Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market',
                        likeCount: 2,
                        createdDate: new Date().getTime(),
                    })
                )
            }, 3000)
        }).then(() => {
            timerId = setTimeout(() => {
                dispatch(
                    addMessage({
                        id: 6,
                        author: {
                            name: 'Foxy',
                            img: '/usersImg/user5.png',
                        },
                        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione natus vero dignissimos voluptatibus et voluptatem, at omnis, id accusamus nostrum exercitationem laborum voluptatum consequuntur quos tenetur maxime sint, doloremque deleniti.',
                        likeCount: 5,
                        img: '/fakeImg/video-7.jpg',
                        createdDate: new Date().getTime(),
                    })
                )
            }, 5000)
        })

        return () => {
            if (timerId) clearTimeout(timerId)
            dispatch(resetState())
        }
    }, [])
    return (
        <TransitionGroup>
            {communityFeedState.map((message, idx) => {
                return (
                    <CSSTransition
                        key={message.id}
                        timeout={5000}
                        classNames="transition"
                    >
                        <>
                            <div
                                key={message.id}
                                className={`${styles.community_item}`}
                            >
                                <div className={`${styles.avatar}`}>
                                    <Image
                                        width={35}
                                        height={35}
                                        src={message.author.img}
                                        alt="avatar"
                                    />
                                </div>
                                <div className={styles.details}>
                                    <div className={styles.details_header}>
                                        <span className={styles.name}>
                                            {message.author.name}
                                        </span>
                                        <span className={styles.submission_time}>
                                            {formatDistance(
                                                message.createdDate,
                                                new Date(),
                                                { addSuffix: true }
                                            )}
                                        </span>
                                    </div>
                                    <div className={styles.details_comment}>
                                        <p className={styles.text}>
                                            {message.text}
                                        </p>
                                    </div>
                                    <div className={styles.details_footer}>
                                        <Image
                                            className={`${styles.like}`}
                                            src={likeRegular}
                                            alt="like"
                                        />
                                        <span
                                            className={`${styles.likeAmount}`}
                                        >
                                            {message.likeCount}
                                        </span>
                                        <Image
                                            className={`${styles.dislike}`}
                                            src={likeRegular}
                                            alt="dislike"
                                        />
                                    </div>
                                    {message.img && (
                                        <Image
                                            className={styles.comment_img}
                                            width={220}
                                            height={130}
                                            src={message.img}
                                            alt="comment_img"
                                        />
                                    )}
                                </div>
                            </div>
                            {idx < communityFeedState.length - 1 && (
                                <div className={styles.divider_line}></div>
                            )}
                        </>
                    </CSSTransition>
                )
            })}
        </TransitionGroup>
    )
}

export default CommunityFeed
