
import { useAuth } from '../Contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { AuthProviderProps } from '../interface/AuthProviderProps';

const PrivateRoute: React.FC = ({children}: AuthProviderProps) => {

    const {user}:any = useAuth();
    const history = useHistory();

    if(!user) {
        return history.push('/login');
    }

    return children
}


export default PrivateRoute;
