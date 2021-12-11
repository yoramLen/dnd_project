import Spells from '../../components/Spells/Spells'
import styles from "./SpellPage.module.css"

const SpellPage = () =>{


    return(
        <div className='contentWrapper'>
            <h1 className={styles.centertext}>Spells</h1>
            <h3 className={styles.centertext}>Click on a card to go to the details of that card!</h3>
            <Spells/>
        </div>
    )
}

export default SpellPage;