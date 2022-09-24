import './Home.css';
import elden from "../../assets/Elden-Ring_enemy_damage.jpg";
import logoelden from "../../assets/elden_ring_logo1.png";
import malenia from "../../assets/malenia,-blade-of-miquella.jpg";


import { Link } from 'react-router-dom';

export function Home() {
    return(
        <main>
            <section className="apresentacao">
                <article className="container__apresentacao">
                    <h2
                        className="titulo__apresentacao">
                        E o tema desse mês é: 
                        <br>
                        </br>
                        <img src={logoelden}
                            alt="logo do Elden Ring"
                            className="logo__elden" 
                        />
                    </h2>
                    <p className="texto__apresentacao">
                        O chatApp é uma grande oportunidade
                        para você bater um papo legal, fazer
                        novas amizades e com toda certeza ter
                        um ambiente agradável para relaxar.
                        Todos os meses selecionamos temas aleatórios
                        para que possamos expandir coversas, criar
                        discursões e gerar muito entretenimento para
                        todos. O tema desse mês é um dos melhores jogos
                        já feitos. O Souls Like Elden Ring. Se você ainda
                        não faz parte dessa comunidade. Não perca tempo!
                        Cadastre-se agora, é só apertar o clicar o botao
                        abaixo e correr para bater um papo!
                    </p>
                    <Link to={"signin"} className="botao__inscricao">
                        Sign in
                    </Link>
                </article>
                <figure className="imgem__apresentacao">
                    <img src={elden} 
                        alt="Ilustração de uma luta entre dois guerreiros"
                        className="imagem__elden"
                    />
                </figure>
            </section>
            <section className="depoimentos">
                    <article className="container__depoimentos">
                        <h2
                            className="titulo__apresentacao depoimento">
                            O que esperar do chatApp? 
                        </h2>
                        <p className="texto__apresentacao depoimento">
                            A Malenia, Blade of Miqueella, é a nossa principal
                            embaixadora nesse mês em homenagem ao Elden Ring.
                            Abaixo você pode conferir um trecho do depoimentos
                            dela para aqueles que desejam fazer parte do nosso
                            ambiente e compartilhar experiências.
                        </p>
                    </article>
                    <article className="container__depoimentos citacao">
                        <figure>
                            <img src={malenia} 
                                alt="Malenia, Blade of Miquella"
                                className="imagem__elden"
                            />
                        </figure>
                        <aside className="texto__depoimento">
                            <q className="citacao__depoimento">
                                Eu sou Malenia, Blade of Miquella, e eu nunca vi o
                                chatApp conhecer a derrota.
                            </q>
                            <p className="nome_depoimento">
                                - Malenia, Blade of Miquella
                            </p>
                        </aside>
                    </article>
            </section>
        </main>
    )
}