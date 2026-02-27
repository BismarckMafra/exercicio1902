import { Link } from 'react-router-dom';
import './mainNav.css';

function Nav() {
    return (
        <nav className="mainNav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/listar-usuarios">Listar todos os usuários</Link></li>
                <li><Link to="/listar-usuarios/1">Listar usuários pelo ID</Link></li>
                <li><Link to="/cadastrar-usuario">Cadastrar novo usuário</Link></li>
                <li><Link to="/alterar-dados-cliente">Alterar dados do cliente</Link></li>
                <li><Link to="/deletar-usuario">Deletar usuário</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;