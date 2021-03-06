import React, {useState, useEffect} from 'react'
import { AuthProvider, FirebaseProvider, FirestoreProvider } from './contexts/firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { appConfig } from './config';
import * as Routes from './routes';
import { HomePage, SignInPage, Browse, MovieDetails, SerieDetails, RegisterPage } from './pages';

import {ThemeContext} from './contexts/theme/theme.context.js'

import styles from './App.module.scss';

function App() {
    const [theme, setTheme] = useState('dark');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={styles.app} data-theme={theme}>
                <FirebaseProvider>
                    <AuthProvider>
                    <FirestoreProvider>
                        <Router basename={appConfig.basicURL}>
                        <Switch>
                            <Route exact path={Routes.LANDING} component={ HomePage }/>
                            <Route from={Routes.HOME} to={Routes.LANDING}/>
                            <Route exact path={Routes.AUTH_SIGN_IN} component={ SignInPage }/>
                            <Route exact path={Routes.AUTH_REGISTER} component={ RegisterPage }/>
                            <Route exact path={Routes.BROWSE} component={ Browse }/>
                            <Route exact path={Routes.MOVIE_DETAILS} component={ MovieDetails }/>
                            <Route exact path={Routes.SERIE_DETAILS} component={ SerieDetails }/>
                        </Switch>
                        </Router>
                    </FirestoreProvider>
                    </AuthProvider>
                </FirebaseProvider>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
