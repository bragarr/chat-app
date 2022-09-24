import './SignIn.css';
import logo from '../../assets/chat_logo.svg';

export function SignIn() {
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
                    <span></span>
                </form>
            </section>
        </main>
    )
}