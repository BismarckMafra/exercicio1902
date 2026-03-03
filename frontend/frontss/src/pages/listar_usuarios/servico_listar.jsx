import axios from 'axios';

const BASE_URL = "http://localhost:3000/usuarios";

export const listarUsuarios = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/listar_usuario`);
        return response.data;  
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        throw error;
    }
};