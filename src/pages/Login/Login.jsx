import { useState } from 'react';

import './Login.css';
import logo from '../../assets/chat_logo.svg';

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function Login() {

    const { logar } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const verificacaoLogin = () => {
        if(!email | !senha) {
            setError("Preencha todos os campos!");
            return;
        }
        const res = logar(email, senha);
        if(res) {
            setError(res);
            return;
        }
        navigate("/user");
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
                    <h2 className="titulo__acesso">Acessar chatApp</h2>
                    <input type="email" 
                    placeholder="Digite o seu email"
                    className="input__usuario"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                    <input type="password"
                    placeholder="Digite a sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                    className="input__usuario"
                    />
                    <span className="mensagem__erro">
                       {error}
                    </span>
                    <button
                        type="button"
                        className="botao__login"
                        onClick={verificacaoLogin}
                    >
                        Entrar
                    </button>
                    <article className="container_mensagem">
                    <article>
                        <p className="texto__redirecionamento">
                            Ainda não possui uma conta? <Link to={"/signin"}
                                className="link__redirecionamento">
                                Registre-se
                            </Link>
                        </p>
                    </article>
                    </article>
                </form>                
            </section>
        </main>
    )
}