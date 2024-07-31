import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, logIn, people, personAdd } from 'ionicons/icons';

// Pages
import Home from './pages/Home';
import Registration from './pages/Registration';
import UserLogin from './pages/UserLogin';
import NotFound from './pages/NotFound';
import UsersData from './pages/admin/UsersData';


// i18n
import { useTranslation } from 'react-i18next';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';
import './config/i18n';

//context
import { useAuth } from './Contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

setupIonicReact();

const App: React.FC = () => {
  const { t } = useTranslation();

  const { user }: any = useAuth()

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>

            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/register">
              <Registration />
            </Route>
            <Route exact path="/login">
              <UserLogin />
            </Route>
            <Route exact path="/usersdata">
              <PrivateRoute>
                <UsersData />
              </PrivateRoute>
            </Route>
            {/* <Route exact path="/**">
              <NotFound />
            </Route> */}
            <Route exact path="/">
              <Home />
            </Route>

          </IonRouterOutlet>

          <IonTabBar slot="bottom">

            {!user &&
              <IonTabButton tab="login" href="/login">
                <IonIcon aria-hidden="true" icon={logIn} />
                <IonLabel>{t('login')}</IonLabel>
              </IonTabButton>
            }
            <IonTabButton tab="register" href="/register">
              <IonIcon aria-hidden="true" icon={personAdd} />
              <IonLabel>{t('register')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon aria-hidden="true" icon={home} />
              <IonLabel>{t('home')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="usersdata" href="/usersdata">
              <IonIcon aria-hidden="true" icon={people} />
              <IonLabel>{t('userData')}</IonLabel>
            </IonTabButton>

          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
