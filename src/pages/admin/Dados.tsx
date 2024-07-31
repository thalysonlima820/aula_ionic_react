import { IonContent, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage } from '@ionic/react';
import { create, trash } from 'ionicons/icons';
// i18n
import { useTranslation } from 'react-i18next';
import { Usuario } from '../../interface/Usuario';

type DadosProps = {
  usuarios: Usuario[]
  addHandleDelete: (u: Usuario) => void
}

const Dados: React.FC<DadosProps> = ({ usuarios, addHandleDelete }) => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonList>
          {usuarios.map((usu) => (
            <IonItemSliding  key={usu.id}>
              <IonItem>
                <IonLabel>{usu.nome}</IonLabel>
              </IonItem>

              <IonItemOptions>
                <IonItemOption color={'success'}>
                  <IonIcon icon={create} />
                  {t('edit')}
                </IonItemOption>

                <IonItemOption color={'danger'} onClick={() => addHandleDelete(usu)}>
                  <IonIcon icon={trash} />
                  {t('delete')}
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Dados;
