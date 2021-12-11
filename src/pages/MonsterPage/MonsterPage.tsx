import Monsters from "../../components/Monsters/Monsters";
import styles from './MonsterPage.module.css';

const MonsterPage = () =>{
    return(
        <div className='contentWrapper'>
            <h1 className={styles.centertext}>Monsters
            </h1>
            <Monsters/>
        </div>
    )
}

export default MonsterPage;