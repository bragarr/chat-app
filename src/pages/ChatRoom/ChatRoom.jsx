import "./ChatRoom.css";

import { FaUserCircle } from 'react-icons/fa';

export function ChatRoom() {;
    return (
        <section className="espaço__chat">
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
    
            </article>
            <form className="container__enviar">
                <input type="text"
                placeholder="Aqui serão digitadas as mensagens"
                className="container__mensagem"
                />
                <button type="submit" className="botao__enviar">
                    Enviar
                </button>
            </form>
        </section>
    )
}