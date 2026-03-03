import { useState, useEffect } from "react";
import { listarUsuarios } from "./servico_listar";


function SectionUser() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const carregarUsuarios = async () => {
      try {
        const lista_de_usuarios = await listarUsuarios();
        setUsuarios(lista_de_usuarios);
        console.log(lista_de_usuarios);
      
      } catch (error) {
        console.error("Erro ao carregar usuários:", error);
      }
    };
    carregarUsuarios();
  
  },
    []);

  return (
    <div >
      <h2>Listar Usuários</h2>
      <p>Esta página permite visualizar os usuários cadastrados.</p>
      <table>
        <thead>
          
          <th>ID</th>
          <th>Nome</th>
          <th>Sobrenome</th>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nome}</td>
              <td>{u.sobrenome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  );
}

export default SectionUser;