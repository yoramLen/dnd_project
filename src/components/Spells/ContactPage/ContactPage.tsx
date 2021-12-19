import Contactform from '../../Contactform/Contactform';
import styles from './ContactPage.module.css';
const ContactPage = () => {

    return (
        <div className='contentWrapper'>
            <h1 className={styles.centertext}>Contact</h1>
        <p className={styles.centertext}>Please do not contact us and if you feel like contacting us then use the form below. We promise to eventually reply (maybe).</p>
       <div className={styles.centertext}>
       <Contactform/>

       </div>
        

        </div>
    );
}

export default ContactPage;