import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { HiMenu } from 'react-icons/hi';

import './Header.css';
import logo from '../../assets/chat_logo.svg'

const DefineUserHearder = () => {
    let { logado } = useAuth();

    return logado > 0 ?
    <nav className="navegacao">
        {/* <HiMenu className="botao__menu--externo" /> */}
        <Link to={"/"}
        className="link__navegacao">
            Home
        </Link>
        <Link to={"user"}
        className="link__navegacao">
            User
        </Link>
        <Link to={"chatroom"}
        className="link__navegacao">
            Chat Room
        </Link>
    </nav>
    :
    <nav className="navegacao">
        {/* <HiMenu className="botao__menu--externo" /> */}
        <Link to={"/"}
        className="link__navegacao">
            Home
        </Link>
        <Link to={"login"}
        className="link__navegacao">
            Login
        </Link>
        <Link to={"signin"}
        className="link__navegacao">
            Sign In
        </Link>
        <Link to={"chatroom"}
        className="link__navegacao">
            Chat Room
        </Link>
    </nav>
}

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
            {/* <HiMenu className="botao__menu" /> */}
            <DefineUserHearder />
        </header>
    );
}