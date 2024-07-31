import { useState, useEffect, useContext, createContext, ReactNode } from "react";
import axios from "axios";
import { Usuario } from "../interface/Usuario";
import { AuthContextType } from "../interface/AuthContextType";
import { AuthProviderProps } from '../interface/AuthProviderProps';
import { useTranslation } from "react-i18next";



const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const { t } = useTranslation();

    const [user, setUser] = useState<Usuario | null>(() => {
        const savedUserData = localStorage.getItem('login_teste');
        return savedUserData ? JSON.parse(savedUserData) : null;
    });

    const login = async (nome: string, senha: string) => {
        try {
            const { data } = await axios.get('https://fiancer.online/slim_api/public/v1/usuarios/lista');

            const verificar = data.find((usuario: Usuario) => usuario.nome === nome && usuario.senha === senha);

            if (verificar) {
                setUser(verificar);
                localStorage.setItem('login_teste', JSON.stringify(verificar));
                return true;
            } else {
                throw new Error('Credenciais inválidas');
            }

        } catch (error) {
            throw new Error(t('Credenciais inválidas'));
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('login_teste');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
