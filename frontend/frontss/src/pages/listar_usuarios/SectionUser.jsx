import { useState, useEffect } from "react";
import { listarUsuarios } from "./servico_listar";


function SectionUser() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const carregarUsuarios = async () => {
      try {
        const lista_de_usuarios = await listarUsuarios();
        setUsuarios(lista_de_usuarios);
      } catch (error) {
        console.error("Erro ao carregar usuários:", error);
      }
    };

    carregarUsuarios();
  }, []);

  return (
    <section className="section-user">
      <h2>Listar Usuários</h2>
      <p>Esta página permite visualizar os usuários cadastrados.</p>
      <table>
        <thead>
          <th>
            ID
          </th>
          <th>
            Nome
          </th>
          <th>
            sobrenome
          </th>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.sobrenome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default SectionUser;