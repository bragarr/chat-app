import { useNavigate } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';

import '../Login/Login.css';
import './User.css';
import logo from '../../assets/chat_logo.svg';



import { useAuth } from '../../hooks/useAuth';

export function User() {

    const { logout } = useAuth();
    const navigate = useNavigate();
    let nomeUsuario = "";

    const userToken = JSON.parse(localStorage.getItem("user_token"));
    const emailUsuario = userToken.email;

    for(let i=0; i < emailUsuario.length; i++) {
        if(emailUsuario[i] === "@") {
            nomeUsuario = emailUsuario.slice(0, i)
        }
    }


    return(
        <main className="conteudo__principal">
            <section className="container__sessao--login">
                <figure className="container__chatapp">
                    <img src={logo}
                        alt="Logo do chatApp"
                        className="logo"
                    />
                    <h2 className="descricao__app">chatApp</h2>
                </figure>
                <form className="container__login">
                    <h2 className="titulo__acesso">Bom ter você aqui</h2>
                    <figure className="container__usuario">
                        <FaUserCircle className="icone__perfil"/>
                        <p className="user__name">{nomeUsuario}</p>
                    </figure>
                    <button
                        type="button"
                        className="botao__login"
                        onClick={() => [logout(), navigate("/")]}
                    >
                        Sair
                    </button>
                </form>
            </section>
        </main>
    )
}