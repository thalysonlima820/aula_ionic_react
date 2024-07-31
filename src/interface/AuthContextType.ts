import { Usuario } from "./Usuario";

export interface AuthContextType {
    User: Usuario | null;
    login: (userData: Usuario) => void;
    logout: ()=> void
}