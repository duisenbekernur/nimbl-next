import OpportunityList from '@/components/OpportunityList'
import RecomendationDropdown from '@/components/RecomendationDropdown'
import styles from './Opportunities.module.scss'
const Opportunities = () => {
    return (
        <main className={styles.container}>
            <article className={styles.mainContainer}>
                <RecomendationDropdown />
                <RecomendationDropdown />
                <RecomendationDropdown />
                <RecomendationDropdown />
            </article>
            <OpportunityList />
        </main>
    )
}

export default Opportunities
