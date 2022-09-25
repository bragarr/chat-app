import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../../assets/chat_logo.svg'

export function Header() {
    return(
        <header className="standard__hearder">
            <figure className="logo__name">
                <Link to={"/"}>
                    <img src={logo}
                    alt="Logo do chatApp"
                    className="logo__chat"/>
                </Link>
                <h1 className="titulo_app">chatApp</h1>
            </figure>
            <nav>
                <ul className="lista__navegacao">
                    <Link to={"/"}
                    className="link__navegacao">
                        <li className="itens_navegacao">
                            Home
                        </li>
                    </Link>
                    <Link to={"login"}
                    className="link__navegacao">
                        <li className="itens_navegacao">
                            Login
                        </li>
                    </Link>
                    <Link to={"signin"}
                    className="link__navegacao">
                        <li className="itens_navegacao">
                            Sign In
                        </li>
                    </Link>
                    <Link to={"chatroom"}
                    className="link__navegacao">
                        <li className="itens_navegacao">
                            Chat Room
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}