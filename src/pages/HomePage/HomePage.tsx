import styles from './HomePage.module.css';


const HomePage = () => {

    return (
        <div className='contentWrapper'>
            <h1 className={styles.centertext} >Home</h1>
        <p className={styles.centertext}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate dolor fugit eos ullam sed qui odio ducimus, corporis dolorum repudiandae tempore, doloribus ea suscipit, harum necessitatibus deserunt blanditiis voluptatibus accusantium.</p>
        </div>
    );
}

export default HomePage;