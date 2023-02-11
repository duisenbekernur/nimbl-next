import {FC} from 'react'
import style from './TableChannels.module.scss'
import Image from 'next/image'

type Props = {}

const channels = [
    {
        id: 1,
        name: 'BlueWard2',
        subscribers: '100k',
        price: 134,
        total: 238,
        avatar: '/usersImg/user1.png',
    },
    {
        id: 2,
        name: 'Basmore',
        subscribers: '90k',
        price: 110,
        total: 200,
        avatar: '/usersImg/user2.png',
    },
    {
        id: 3,
        name: 'Thebretway',
        subscribers: '78k',
        price: 92,
        total: 189,
        avatar: '/usersImg/user3.png',
    },
    {
        id: 4,
        name: 'Harris',
        subscribers: '53k',
        price: 86,
        total: 167,
        avatar: '/usersImg/user4.png',
    },
    {
        id: 5,
        name: 'Auronplay',
        subscribers: '48k',
        price: 74,
        total: 126,
        avatar: '/usersImg/user5.png',
    },
    {
        id: 6,
        name: 'BentoBoi',
        subscribers: '51k',
        price: 76,
        total: 142,
        avatar: '/usersImg/user6.png',
    },
    {
        id: 7,
        name: 'Hussain',
        subscribers: '30k',
        price: 59,
        total: 102,
        avatar: '/usersImg/user7.png',
    },
]

const TableChannels: FC<Props> = (props) => {
    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th></th> {/* number */}
                    <th>Channels</th>
                    <th>Subscribers</th>
                    <th>Floor Price</th>
                    <th>Total Volume</th>
                </tr>
            </thead>
            <tbody>
                {channels.map((item, idx) => (
                        <tr>
                            <td>{idx + 1}</td>
                            <td>
                                <div className={style.channel_name}>
                                    <Image width={45} height={45} src={item.avatar} alt='avatar' />
                                    <span>{item.name}</span>
                                </div>
                            </td>
                            <td>{item.subscribers}</td>
                            <td className={style.cell_gradient}>{item.price} NMBL</td>
                            <td className={style.cell_gradient}>{item.total} NMBL</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default TableChannels
