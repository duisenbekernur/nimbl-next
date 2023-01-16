import style from '@/styles/Content.module.scss'
import avatar from '@/assets/channel-content/user-avatar.gif'
import Image from 'next/image'

const ChannelContent = () => {
    return (
        <div className={style.page}>
            <div className={style.header}>Era</div>
            <div className={style.body}>
                <div className={style.container}>
                    <div className={style.avatar}>
                        <Image src={avatar} width={160} height={160} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ChannelContent
