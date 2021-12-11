import React, { useState } from 'react';
import styles from './App.module.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ContactPage from '../../pages/ContactPage/ContactPage';
import HomePage from '../../pages/HomePage/HomePage';
import SpellPage from '../../pages/SpellPage/SpellPage';
import Header from '../Header/Header';
import RacePage from '../../pages/RacePage/RacePage';
import ClassPage from '../../pages/ClassPage/ClassPage';
import MonsterPage from '../../pages/MonsterPage/MonsterPage';
import PrivacyPage from '../../pages/PrivacyPage/PrivacyPage';
import DetailPage from '../../pages/DetailPage/DetailPage';

export const ThemeContext = React.createContext({ mode: 'dark', setMode: (mode: string) => { } });

const App = () => {

  const [mode, setMode] = useState<string>('dark');


  return (
    <div className={styles.fillWindow}>
      <ThemeContext.Provider value={{ mode: mode, setMode: setMode }}>


        <Router>

          <Header mode={mode} />
          <Switch>
            <div>
              <div className={mode === 'dark' ? styles.body : styles.bodylight}>


                <Route path="/" exact>
                  <HomePage />
                </Route>
                <Route path="/About" exact>
                  <AboutPage />
                </Route>
                <Route path="/Contact" exact>
                  <ContactPage />
                </Route>
                <Route path="/Spells" exact>
                  <SpellPage />
                </Route>
                <Route path="/Details/:type/:index">
                  <DetailPage />
                </Route>
                <Route path="/Races" exact>
                  <RacePage />
                </Route>
                <Route path="/Classes" exact>
                  <ClassPage />
                </Route>
                <Route path="/Monsters" exact>
                  <MonsterPage />
                </Route>
                <Route path="/Privacy" exact>
                  <PrivacyPage />
                </Route>
              </div>
            </div>

          </Switch>

        </Router>

      </ThemeContext.Provider>
    </div>


  );
}


export default App;
