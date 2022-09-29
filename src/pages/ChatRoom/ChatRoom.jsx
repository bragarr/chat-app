import '../Login/Login.css';

import { FaUserCircle } from 'react-icons/fa';

export function ChatRoom() {
    const enviaMensagem = (e) => {
        e.preventDefault();
        let tela = document.querySelector(".container__mensagens");
        let novaMensagem = document.createElement("p");
        novaMensagem.classList.add("formato__Mensagem");
        let conteudoMensagem = document.querySelector(".container__mensagem");
        if(conteudoMensagem.value === "") {
            return;
        } else {
            novaMensagem.textContent = conteudoMensagem.value;
            tela.appendChild(novaMensagem);
            conteudoMensagem.value = "";
        }
    }    
    return (
        <section className="espaco__chat">
            <article className="container__usuarios">
                <h2 className="titulo__secao">Online</h2>
                <div className="container__conversa">
                    <p className="container__amigo">
                        <FaUserCircle className="icone__amigo"/>
                        Amigo 1
                    </p>
                </div>
                <div className="container__conversa">
                    <p className="container__amigo">
                        <FaUserCircle className="icone__amigo"/>
                        Amigo 2
                    </p>
                </div>
            </article>
            <article className="container__mensagens">
                <h2 className="amigo__atual">Amigo 1</h2>
            </article>
            <form className="container__enviar">
                <input type="text"
                placeholder="Aqui serão digitadas as mensagens"
                className="container__mensagem"
                />
                <button type="submit" 
                className="botao__enviar"
                onClick={enviaMensagem}
                >
                    Enviar
                </button>
            </form>
        </section>
    )
}