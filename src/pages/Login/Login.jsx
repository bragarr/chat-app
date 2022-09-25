import './Login.css';
import logo from '../../assets/chat_logo.svg';

import { Link } from 'react-router-dom';

export function Login() {
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
                    <h2 className="titulo__acesso">Acessar chatApp</h2>
                    <input type="text" 
                    placeholder="Digite o seu email"
                    className="input__usuario"
                    />
                    <input type="text"
                    placeholder="Digite a sua senha"
                    className="input__usuario"
                    />
                    <button
                        type="submit"
                        className="botao__login"
                    >
                        Entrar
                    </button>
                    <article className="container_mensagem">
                        <p>
                            Ainda não possui uma conta? 
                            <Link to={"/signin"}>
                                Registre-se
                            </Link>
                        </p>
                        <span></span>
                    </article>
                </form>
                
            </section>
        </main>
    )
}