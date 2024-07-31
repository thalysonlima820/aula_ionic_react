import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../Contexts/AuthContext";
import { Usuario } from "../interface/Usuario";
import Registration from '../pages/Registration';

type operationProps = "add" | "delete" | "update"

const api = import.meta.env.VITE_API_URL;

const useHttpUsuario = () => {

    const { user }: any = useAuth()
    const [users, setUsers] = useState('')
    const [erro, setErro] = useState('')

    const handleSuccess = (dados: Usuario, operation: operationProps) => {
        if (operation === "add") {
            setUsers((dadosUsuarios) => [dados, ...dadosUsuarios]);
        } else if (operation === "delete") {
            setUsers((dadosUsuario) => dadosUsuario.filter((u) => u.id !== dados.id))
        } else if (operation === "update") {
            setUsers((dadosUsuarios) => [dados, ...dadosUsuarios])
        }
      };

    const handleBusca = async () => {
        try {
            const pesquisa = await axios.get(`${api}/lista`)
            setUsers(pesquisa.data)
        } catch (error) {
            setErro('Erro no servidor')
        }
    }
    const handleRegistration = async(userDados: Usuario) => {
        const Registration = await axios.post(
            `${api}/adicionar`,
            userDados
        )
        handleSuccess(Registration.data, "add")
    }
    const handleDelete = async (userId: Usuario) => {
        try {
          await axios.get(
            `${api}/remover/${userId.id}`
          );
          handleSuccess(userId, "delete");
        } catch (error) {
          console.log("erro", error);
        }
      }

    useEffect(() => {
        if (user) {
            handleBusca()
        }
    }, [user])

    return { users, erro, handleRegistration, handleDelete }
}

export default useHttpUsuario