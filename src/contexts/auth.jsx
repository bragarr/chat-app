import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if(userToken && usersStorage) {
            const usuarioCadastrado = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );
            if(usuarioCadastrado) setUser(usuarioCadastrado[0]);
        }
    }, []);

    const logar = (email, senha) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const usuarioCadastrado = usersStorage?.filter((user) => user.email===email);

        if(usuarioCadastrado?.length) {
            if(usuarioCadastrado[0].email === email && usuarioCadastrado[0].senha === senha) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token }));
                setUser({ email, senha });
                return;
            } else {
                return "E-mail ou senha incorretos!"
            }
        } else {
            return "Usuário não cadastrado!";
        }
    }

    const registro = (email, senha) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const usuarioCadastrado = usersStorage?.filter((user) => user.email===email);

        if(usuarioCadastrado?.length) {
            return "Já tem uma conta com esse E-mail!"
        }

        let novoUsuario;

        if(usersStorage) {
            novoUsuario = [...usersStorage, { email, senha }];
        } else {
            novoUsuario = [{ email, senha }];
        }

        localStorage.setItem("users_db", JSON.stringify(novoUsuario));

    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider
            value={{ user, logado: !!user, logar, registro, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};