import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

// i18n
import { useTranslation } from 'react-i18next';

import useHttpUsuario from '../../hooks/useHttpUsuario';
import Dados from './Dados';
import { useAuth } from '../../Contexts/AuthContext';
import { Usuario } from '../../interface/Usuario';

const UsersData: React.FC = () => {
  const { t } = useTranslation();
  const { users, handleDelete } = useHttpUsuario();
  const { user }:any = useAuth();

  const usuariosArray = Array.isArray(users) ? users : [];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('userData')}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonContent>
          {user && <Dados usuarios={usuariosArray} addHandleDelete={handleDelete} />}
        </IonContent>
      </IonContent>
    </IonPage>
  );
}

export default UsersData;
