import Classes from "../../components/Classes/Classes"
import styles from './ClassPage.module.css'

const ClassPage = () =>{
    return(
        <div className='contentWrapper'>
            <h1 className={styles.centertext}>Classy!</h1>
            <Classes/>
            </div>
    )
}

export default ClassPage;