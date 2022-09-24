import './Home.css'
import elden from "../../assets/Elden-Ring_enemy_damage.jpg"
import logoelden from "../../assets/elden_ring_logo1.png"


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
                        já feitos. O Souls Like Elden Ring.
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
        </main>
    )
}