import styles from './PrivacyPage.module.css'


const PrivacyPage = () =>{
    return(
        <div className='contentWrapper'>
            <h1 className={styles.centertext}>Privacy Policy</h1>
            <div className={styles.textwrapper}>
                <p>Since we do not collect any data our privacy policy is quite simple. We do not collect data so there is no privacy concern.</p>
                <p>We promise that if (in the future) we start collecting data we will always ask for your consent and specify which data we store, for what purpose and for how long.</p>

            </div>
        </div>
    )
}

export default PrivacyPage;