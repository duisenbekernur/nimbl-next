import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import MainSidebar from '@/components/MainSidebar'
import RecomendationDropdown from '@/components/RecomendationDropdown'
import VideoCard from '@/components/VideoCard'
import withAuthorization from '@/HOC/Authorization/Authorization'
import {useSelector} from 'react-redux'
import {RootState} from '@/store/store'
import Layout from '@/components/Layout'
import Link from 'next/link'

function Home() {
    const data = useSelector((state: RootState) => state.videos.videos)

    return (
        <Layout>
            <Head>
                <title>Nimbl</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className="col-4">
                    <MainSidebar />
                </div>
                <div className={`${styles.content} ${'col-8'}`}>
                    <div className={styles.dropdowns}>
                        <RecomendationDropdown />
                        <RecomendationDropdown />
                        <RecomendationDropdown />
                        <RecomendationDropdown />
                    </div>
                        <div className={styles.content_videos}>
                            {data?.map((item, index) => (
                                <Link href="/video/1" passHref style={{textDecoration: 'none'}}>
                                <VideoCard key={index} {...item} />
                            </Link>
                            ))}
                        </div>
                </div>
            </main>
        </Layout>
    )
}

export default withAuthorization(Home)
