import styles from './AboutPage.module.css';
const AboutPage = () => {


    return (
        <div className='contentWrapper'>
            <h1 className={styles.centertext}>About</h1>
            <div className={styles.textwrapper}>
            <h2>Bringing the nerd content to you</h2>
            <p>This is a project started for school, we  had to use React in combination met TypeScript to make a web app. This project is about D&D and uses the D&D 5e api. </p>
            <h2>The author</h2>
            <p>This project was made by Yoram Lenaers, second year programming student at AP and avid nerd/gamer. I took time to make sure the project aligned with my own interests since I believe it helps to motivate you if the topic/project interests you. I hope you enjoy this app and if there are any questions feel free to use the contact form.</p>

            </div>
        </div>
    );
}

export default AboutPage;