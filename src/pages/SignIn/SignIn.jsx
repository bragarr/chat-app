import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import logo from '../../assets/chat_logo.svg';

export function SignIn() {

    const { registro } = useAuth();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConf, setSenhaConf] = useState("");
    const [error, setError] = useState("");

    const verificacaoLogin = () => {
        if(!email | !emailConf | !senha | !senhaConf) {
            setError("Preencha todos os campos!");
            return;
        } else if(email !== emailConf || senha !== senhaConf) {
            setError("Valores diferentes em senha ou e-mail!");
            return;
        }
        const res = registro(email, senha);

        if(res) {
            setError(res);
            return;
        }
        alert("Usuário Cadastrado com sucesso!");
        navigate("/login");
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
                    <h2 className="titulo__acesso">Registre-se no chatApp</h2>
                    <input type="email" 
                    placeholder="Digite o seu email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                    className="input__usuario"
                    />
                    <input type="email"
                    placeholder="Confirme seu e-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                    className="input__usuario"
                    />
                    <input type="password"
                    placeholder="Digite a sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                    className="input__usuario"
                    />
                    <input type="password"
                    placeholder="Confirme a sua senha"
                    value={senhaConf}
                    onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
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
                        Registrar
                    </button>
                    <span></span>
                </form>
            </section>
        </main>
    )
}