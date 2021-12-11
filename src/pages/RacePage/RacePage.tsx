import Races from "../../components/Races/Races"
import styles from './Racepage.module.css';


const RacePage = () =>{


    return(
        <div className='contentWrapper'>
            <h1 className={styles.centertext}>Races</h1>
            <h3 className={styles.centertext}>Click on a card to go to the details of that card!</h3>

            <Races/> 
       </div>
    )
}

export default RacePage;