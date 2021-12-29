import styles from './HomePage.module.css';


const HomePage = () => {

    return (
        <div className='contentWrapper'>
            <h1 className={styles.centertext} >Home</h1>
            <div className={styles.textwrapper}>
                <h2>What is this?</h2>
                <p>This is an attempt to collect D&D resources in a concise way. You can choose one of the categories in the dropdown menu and this will take you to an overview page for that category. When you click on a card it will take you to a page with details about your selected card. </p>

            </div>        
            
        </div>
    );
}

export default HomePage;