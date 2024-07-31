import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

//i18n
import { useTranslation } from 'react-i18next';
import useHttpUsuario from '../hooks/useHttpUsuario';

const Registration: React.FC = () => {

  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {handleRegistration}:any = useHttpUsuario()

  const handleRegistrations = async (event: React.FormEvent) => {
    event.preventDefault();

    if(name !== '' && password !== '' && email !== ''){
      try {
        const nome = name;
        const senha = password
        const UsersData = {nome, email, senha}
        handleRegistration(UsersData)
        setName('')
        setEmail('')
        setPassword('')
      } catch (error) {
        
      }
    }

   
  }


  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle> {t('register')} </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <form onSubmit={handleRegistrations}>
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
                label={t('email')}
                labelPlacement="stacked"
                value={email}
                clearInput={true}
                onIonChange={(e) => setEmail(e.detail.value as string)}
                required
                aria-label="Email"
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
                aria-label="password"
              />
            </IonItem>
          </IonList>
          <IonButton type='submit'>{t('btnRegister')}</IonButton>
        </form>
      </IonContent>

    </IonPage>
  );
}


export default Registration;
