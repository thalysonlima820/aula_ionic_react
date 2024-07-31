
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

//i18n
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
    return (
        <IonPage>
            
          <IonContent fullscreen>
          {t('error404')}
          </IonContent>
    
        </IonPage>
      );
}


export default NotFound;
