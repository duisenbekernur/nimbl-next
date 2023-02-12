import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Sidebar from '@/components/MainSidebar'
import RecomendationDropdown from '@/components/RecomendationDropdown'
import VideoCard from '@/components/VideoCard'
import withAuthorization from '@/HOC/Authorization/Authorization'
import {useRouter} from 'next/router'
import {UseShoppingCart} from '@/context/AuthContext'
import {useEffect, useRef, useState, WheelEvent} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '@/store/store'
import Layout from '@/components/Layout'
import Flicking from '@egjs/react-flicking'

function Home() {
    const router = useRouter()
    const {isAuth} = UseShoppingCart()
    const videos = useSelector((state: RootState) => state.videos.videos)
    const recomendationsRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!isAuth) {
            router.push('/login')
        }
    }, [])

    return isAuth ? (
        <Layout>
            <Head>
                <title>NIMBL</title>
                <meta name="description" content="NIMBL app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className="col-4">
                    <Sidebar />
                </div>
                <div className={`${styles.content} ${'col-8'}`}>
                    <Flicking moveType="freeScroll" bound={true}>
                        <div className={styles.dropdowns}>
                            <RecomendationDropdown />
                            <RecomendationDropdown />
                            <RecomendationDropdown />
                            <RecomendationDropdown />
                            <RecomendationDropdown />
                            <RecomendationDropdown />
                            <RecomendationDropdown />
                            <RecomendationDropdown />
                            <RecomendationDropdown />
                        </div>
                    </Flicking>
                    <div className={styles.content_videos}>
                        {videos?.map((item, index) => (
                            <VideoCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    ) : null
}

export default withAuthorization(Home)
