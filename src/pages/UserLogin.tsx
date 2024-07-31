import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

import { useHistory } from 'react-router-dom';
//md5
import md5 from 'crypto-js/md5';

//i18n
import { useTranslation } from 'react-i18next';

//context
import { useAuth } from '../Contexts/AuthContext';

const UserLogin: React.FC = () => {

  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [erro, setErro] = useState('');

  const { login } = useAuth();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (name !== '' && password !== '') {

      const passwordMd5: any = md5(password).toString();

      try {
        const isLoggedIn = await login(name, passwordMd5);
        if (isLoggedIn) {
          history.push('/home'); // Navegar para a rota desejada
        }
      } catch (error) {
        setErro(t('Erro'));
      }
    }
  };


  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle> {t('login')} </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <form onSubmit={handleLogin}>
          <IonList>
            <IonItem>
              <IonInput
                label={t('name')}
                labelPlacement="stacked"
                value={name}
                clearInput={true}
                onIonChange={(e) => setName(e.detail.value as string)}
                required
                aria-label="Name"
              />
            </IonItem>
            <IonItem>
              <IonInput
                label={t('password')}
                labelPlacement="stacked"
                value={password}
                clearInput={true}
                onIonChange={(e) => setPassword(e.detail.value as string)}
                required
                aria-label="Name"
              />
            </IonItem>
          </IonList>
          <IonButton type='submit'>{t('login')}</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
}


export default UserLogin;
