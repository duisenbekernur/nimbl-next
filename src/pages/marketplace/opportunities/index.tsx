import OpportunityList from '@/components/OpportunityList'
import RecomendationDropdown from '@/components/RecomendationDropdown'
import styles from './Opportunities.module.scss'
import Layout from '@/components/Layout'
import CategoriesSwiper from '@/components/CategoriesSwiper'
const Opportunities = () => {
    return (
        <Layout>
            <main className={styles.container}>
                <article className={styles.mainContainer}>
                    <CategoriesSwiper />
                </article>
                <OpportunityList />
            </main>
        </Layout>

    )
}

export default Opportunities