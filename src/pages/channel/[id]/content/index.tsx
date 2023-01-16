import style from '@/styles/Content.module.scss'
import Image from 'next/image'
import avatar from '@/public/images/channel-content/user-avatar.gif'
import iconShare from '@/public/images/channel-content/icon-share.svg'
import iconDots from '@/public/images/channel-content/icon-dots.svg'

const ChannelContent = () => {
    return (
        <div className={style.page}>
            <div className={style.headerBg}>Era</div>
            <div className={style.body}>
                <div className={style.container}>
                    <div className={style.avatar}>
                        <Image
                            src={avatar}
                            width={160}
                            height={160}
                            alt="Avatar"
                            style={{
                                objectFit: 'cover',
                                pointerEvents: 'none',
                                userSelect: 'none',
                            }}
                        />
                    </div>
                    <div>
                        <h2 className={style.hero_title}>DandelionWist</h2>
                        <p className={style.hero_desc}>
                            A collection of 10,000 zombies evolving through the
                            sweet juicy brains their owners decide to feed them.
                            Zombies are cute yet they'd crack your skull open
                            and jam a straw through your cortex to sip on that
                            sweet white matter.
                        </p>
                    </div>
                    <div className={style.hero_stats}>
                        <div className={style.hero_stats__item}>
                            <span className={style.value}>41 NMBL</span>
                            <span className={style.key}>Floor Price</span>
                        </div>
                        <div className={style.hero_stats__item}>
                            <span className={style.value}>141 NMBL</span>
                            <span className={style.key}>Total Volume</span>
                        </div>
                        <div className={style.hero_stats__item}>
                            <span className={style.value}>8%</span>
                            <span className={style.key}>Listed</span>
                        </div>
                        <div className={style.hero_stats__item}>
                            <span className={style.value}>8%</span>
                            <span className={style.key}>Listed</span>
                        </div>
                        <div className={style.hero_stats__item}>
                            <span className={style.value}>41 NMBL</span>
                            <span className={style.key}>Floor Price</span>
                        </div>
                        <div className={style.hero_stats__item}>
                            <span className={style.value}>141 NMBL</span>
                            <span className={style.key}>Total Volume</span>
                        </div>
                        <div className={style.hero_stats__item}>
                            <span className={style.value}>8%</span>
                            <span className={style.key}>Listed</span>
                        </div>
                        <div className={style.hero_stats__item}>
                            <span className={style.value}>8%</span>
                            <span className={style.key}>Listed</span>
                        </div>
                    </div>
                    <div className={style.hero_links}>
                        <div className={style.hero_links__item}>
                            <Image
                                src={iconShare}
                                width={21}
                                height={24}
                                alt="share-icon"
                            />
                        </div>
                        <div className={style.hero_links__item}>
                            <Image
                                src={iconDots}
                                width={21}
                                height={24}
                                alt="share-dots"
                            />
                        </div>
                    </div>
                </div>
                <div className={style.trade_bar}>
                    <div className={style.trade_bar__search}><input type="text" placeholder='Search items' /></div>
                    <div className={style.trade_bar__tabs}></div>
                    <div className={style.trade_bar__refresh}></div>
                    <div className={style.trade_bar__widget}></div>
                </div>
            </div>
        </div>
    )
}

export default ChannelContent
