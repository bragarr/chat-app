import { useNavigate } from 'react-router-dom';

import '../Login/Login.css';
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
                    <p>{nomeUsuario}</p>
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