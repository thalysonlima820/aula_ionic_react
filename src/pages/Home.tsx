import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import LanguageSwitcher from '../components/LanguageSwitcher';

//i18n
import { useTranslation } from 'react-i18next';
//
import { useAuth } from '../Contexts/AuthContext';

import './css/home.css'

const Home: React.FC = () => {

  const { t } = useTranslation();
  const { user, logout }: any = useAuth();

  return (
    <IonPage>

      <IonHeader className='nav'>
          <IonTitle>{t('home')}</IonTitle>
          {user && <IonButton onClick={logout}>Sair</IonButton>}
      </IonHeader>


      <IonContent class='content'>
        <LanguageSwitcher />
        <h1>{t('welcome')} {user && (user.nome)}</h1>
      </IonContent>

    </IonPage>
  );
}


export default Home;
