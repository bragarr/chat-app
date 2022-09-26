import "./ChatRoom.css"

export function ChatRoom() {
    return (
        <section className="espaço__chat">
            <article className="container__usuarios">
                <h2>Área dos usuários online</h2>
            </article>
            <article className="container__mensagens">
                <h2>Área das mensagens</h2>
            </article>
            <form className="container__enviar">
                <input type="text"
                placeholder="Aqui serão digitadas as mensagens"
                />
                <button type="submit">
                    Enviar
                </button>
            </form>
        </section>
    )
}